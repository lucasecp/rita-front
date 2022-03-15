import React, { useEffect, useState } from 'react'

import { MultiSelectOption } from '@/components/Form/MultSelect'

import { allColumns } from './constants/allColumns'

import { Container } from './styles'

interface FieldsBillingProps {
  columns?: MultiSelectOption[]
}

export const FieldsBilling: React.FC<FieldsBillingProps> = ({ columns }) => {
  const [columnsToShow, setColumnsToShow] = useState(allColumns)

  useEffect(() => {
    const columnsFiltered = allColumns.filter((allColumn) =>
      columns?.some((column) => column.id === allColumn.id),
    )

    setColumnsToShow(columnsFiltered)

    if (columnsFiltered.find((column) => column.id === 'phone')) {
      const indexPhone = columnsFiltered.findIndex(
        (column) => column.id === 'phone',
      )

      const columnsWithDdd = columnsFiltered

      columnsWithDdd.splice(indexPhone, 0, {
        name: 'DDD',
        id: 'ddd',
      })

      setColumnsToShow(columnsWithDdd)
    }
  }, [columns])

  return (
    <Container>
      {columnsToShow.map((field) => (
        <div key={field.id}>
          <h5> {field.name} </h5>
        </div>
      ))}
    </Container>
  )
}
