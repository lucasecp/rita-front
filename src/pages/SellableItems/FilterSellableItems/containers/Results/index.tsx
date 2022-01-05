import React, { useState } from 'react'

import { Container } from './styles'
import { FieldsSellableItems } from './components/FieldsSellableItems'
import { DataSellableItems } from './components/DataSellableItems'
import { SellableItemsFilters } from '../../@types'

interface ResultsProps {
  filters: SellableItemsFilters
}

export const Results: React.FC<ResultsProps> = ({ filters }) => {
  const [order, setOrder] = useState({ name: '', value: '' })

  return (
    <Container>
      <FieldsSellableItems onGetOrder={setOrder} />
      <DataSellableItems filters={filters} order={order} />
    </Container>
  )
}
