import React, { useState } from 'react'

import { Container } from './styles'
import { FieldsUsers } from './components/FieldsUsers'
import { DataUsers } from './components/DataUsers'
import { OrderSellableItems, SellableItemsFilters } from '../../@types'

interface ResultsProps {
  filters: SellableItemsFilters
}

export const Results: React.FC<ResultsProps> = ({ filters }) => {
  const [order, setOrder] = useState({} as OrderSellableItems)

  return (
    <Container>
      <FieldsUsers onGetOrder={setOrder} />
      <DataUsers filters={filters} order={order} />
    </Container>
  )
}
