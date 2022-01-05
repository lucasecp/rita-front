import React, { useState } from 'react'

import { Container } from './styles'
import { FieldsSellableItems } from './FieldsSellableItems'
import { DataSellableItems } from './DataSellableItems'
import { SellableItemsFilters } from '../../@types'

interface ResultsProps {
  filters: SellableItemsFilters
}

export const Results: React.FC<ResultsProps> = ({ filters }) => {
  const [order, setOrder] = useState('')

  console.log(filters)
  console.log(order)

  return (
    <Container>
      <FieldsSellableItems onGetOrder={setOrder} />
      <DataSellableItems filters={filters} order={order} />
    </Container>
  )
}
