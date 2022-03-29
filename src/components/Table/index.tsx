import type { ReactNode } from 'react'
import React, { forwardRef, useState, useImperativeHandle } from 'react'
// import { get as lodashGet, sortBy as lodashSortBy } from 'lodash-es'
import { get as lodashGet } from 'lodash-es'

import { Container, HeaderArrowUp, HeaderArrowDown, BodyCell } from './styles'

type TablePropsHeader = {
  path: string
  label: string
  sortable?: boolean
}

type TablePropsColumn<T = any> = {
  path: string
  fit?: boolean
  custom?: (row: T, index: number, isExpanded: boolean) => ReactNode
}

type TablePropsSort = {
  path?: string
  order?: 'ASC' | 'DESC'
}

type TableProps<T = any> = {
  columns: TablePropsColumn<T>[]
  headers?: TablePropsHeader[]
  childRow?: (row: T) => ReactNode
  data?: T[]
  sort?: TablePropsSort
  onSort?: (sort: TablePropsSort) => void
}

export const Table = forwardRef<{ toggleExpand: any }, TableProps>(
  function Table(
    { columns, headers = [], childRow, data = [], sort = {}, onSort },
    ref,
  ) {
    const [expandedRowIndex, setExpandedRowIndex] = useState(-1)

    function isSortOrderAsc(path: string) {
      return path === sort.path && sort.order === 'ASC'
    }

    function isSortOrderDesc(path: string) {
      return path === sort.path && sort.order === 'DESC'
    }

    function toggleOrder(path: string) {
      if (sort.path === path) {
        if (sort.order === 'DESC') {
          onSort && onSort({})
        } else {
          onSort && onSort({ path, order: 'DESC' })
        }
      } else {
        onSort && onSort({ path, order: 'ASC' })
      }
    }

    function getRowColumnValue(row: any, path: string) {
      return String(lodashGet(row, path, ''))
    }

    useImperativeHandle(ref, () => ({
      toggleExpand(index: number) {
        setExpandedRowIndex(expandedRowIndex === index ? -1 : index)
      },
    }))

    return (
      <Container>
        <table>
          {Array.isArray(headers) && headers.length > 0 && (
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>
                    <h5>
                      {header.label}
                      {header.sortable && (
                        <div onClick={() => toggleOrder(header.path)}>
                          <HeaderArrowUp
                            order={isSortOrderAsc(header.path) ? 1 : 0}
                          />
                          <HeaderArrowDown
                            order={isSortOrderDesc(header.path) ? 1 : 0}
                          />
                        </div>
                      )}
                    </h5>
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr>
                  {columns.map((column, columnIndex) => (
                    <BodyCell key={columnIndex} fit={column.fit}>
                      {column.custom
                        ? column.custom(
                            row,
                            rowIndex,
                            expandedRowIndex === rowIndex,
                          )
                        : getRowColumnValue(row, column.path)}
                    </BodyCell>
                  ))}
                </tr>
                {childRow && expandedRowIndex === rowIndex && (
                  <tr className="child">
                    <td colSpan={columns.length}>{childRow(row)}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Container>
    )
  },
)
