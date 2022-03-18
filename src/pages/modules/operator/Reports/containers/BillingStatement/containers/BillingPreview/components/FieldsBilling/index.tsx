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
  }, [columns])

  return (
    <Container>
      {columnsToShow.map((field) => (
        <h5 key={field.id}> {field.name} </h5>
      ))}
    </Container>
  )
}
