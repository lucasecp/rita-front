import type { ReactNode } from 'react'
import React, { forwardRef, useState, useImperativeHandle } from 'react'
// import { get as lodashGet, sortBy as lodashSortBy } from 'lodash-es'
import { get as lodashGet } from 'lodash-es'

import { ReactComponent as ChevronLeft } from '@/assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRight } from '@/assets/icons/chevron-right.svg'
import {
  Container,
  HeaderArrowUp,
  HeaderArrowDown,
  BodyCell,
  FooterRowsPerPage,
  FooterPrevNext,
} from './styles'
import { Select } from '@/components/Form/Select'

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

type TableProps<T = any> = {
  columns: TablePropsColumn<T>[]
  headers?: TablePropsHeader[]
  childRow?: (row: T) => ReactNode
  data?: T[]
  sort?: RitaComponents.TableSort
  count?: number
  hidePagination?: boolean
  onSort?: (sort: RitaComponents.TableSort) => void
  onPaginate?: (paging: any) => void
}

const rowsPerPageOptions = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
]

export const Table = forwardRef<{ toggleExpand: any }, TableProps>(
  function Table(
    {
      columns,
      headers = [],
      childRow,
      data = [],
      sort = {},
      count = 0,
      hidePagination = false,
      onSort,
      onPaginate
    },
    ref,
  ) {
    const [expandedRowIndex, setExpandedRowIndex] = useState(-1)
    const [take, setTake] = useState(10)
    const [skip, setSkip] = useState(0)

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

    function handleSelectRowsPerPage(value: string) {
      setTake(Number(value) || 10)
      setSkip(0)
      onPaginate && onPaginate({ take, skip })
    }

    function handleSkipPrevious() {
      const newSkip = skip - take

      if (newSkip >= 0) {
        setSkip(newSkip)
        onPaginate && onPaginate({ take, skip })
      }
    }

    function handleSkipNext() {
      const newSkip = skip + take

      if (newSkip < count) {
        setSkip(newSkip)
        onPaginate && onPaginate({ take, skip })
      }
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

        {!hidePagination && (
          <footer>
            <FooterRowsPerPage>
              Linhas por página:
              {' '}
              <Select
                variation="secondary"
                options={rowsPerPageOptions}
                value={take}
                setValue={handleSelectRowsPerPage}
              />
            </FooterRowsPerPage>

            <div>
              {skip + 1}-{skip + take > count ? count : skip + take} de {count}
            </div>

            <FooterPrevNext>
              <button type="button" onClick={handleSkipPrevious}>
                <ChevronLeft />
              </button>
              <button type="button" onClick={handleSkipNext}>
                <ChevronRight />
              </button>
            </FooterPrevNext>
          </footer>
        )}
      </Container>
    )
  },
)
