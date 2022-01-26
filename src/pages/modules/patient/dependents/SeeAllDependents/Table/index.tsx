import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types'

const Table: React.FC<TableProps> = ({ dependents, order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content dependents={dependents} />
    </Container>
  )
}

export default Table
