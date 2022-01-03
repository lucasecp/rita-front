import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'

export const Results = ({ plans, order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content plans={plans} />
    </Container>
  )
}
