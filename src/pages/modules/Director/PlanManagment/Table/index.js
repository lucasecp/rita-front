import React, { useState } from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'

const Table = ({ plans,order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder}/>
      <Content plans={plans}/>
    </Container>
  )
}

export default Table
