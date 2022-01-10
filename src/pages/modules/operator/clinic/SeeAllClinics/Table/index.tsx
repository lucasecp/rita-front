import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types/index';

const Table: React.FC<TableProps>= ({ clinics, order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content clinics={clinics} />
    </Container>
  )
}

export default Table
