import React from 'react'
import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types/index'

const Table: React.FC<TableProps> = ({ users, order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content users={users} />
    </Container>
  )
}

export default Table
