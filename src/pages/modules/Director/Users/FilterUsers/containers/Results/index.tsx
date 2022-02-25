import React, { useState } from 'react'

import { Container } from './styles'
import { FieldsUsers } from './components/FieldsUsers'
import { DataUsers } from './components/DataUsers'
import { OrderUsers, UsersFilters } from '../../@types'

interface ResultsProps {
  filters: UsersFilters
}

export const Results: React.FC<ResultsProps> = ({ filters }) => {
  const [order, setOrder] = useState({} as OrderUsers)

  return (
    <Container>
      <FieldsUsers onGetOrder={setOrder} />
      <DataUsers filters={filters} order={order} />
    </Container>
  )
}
