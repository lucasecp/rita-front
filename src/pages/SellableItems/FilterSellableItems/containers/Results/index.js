import React, { useState } from 'react'

import { Container } from './styles'
import { FieldsSellableItems } from './FieldsSellableItems'
import { DataSellableItems } from './DataSellableItems'

export const Results = ({ filters }) => {
  const [order, setOrder] = useState()

  console.log(filters)
  console.log(order)

  return (
    <Container>
      <FieldsSellableItems onGetOrder={setOrder} />
      {/* <DataSellableItems plans={plans} /> */}
    </Container>
  )
}
