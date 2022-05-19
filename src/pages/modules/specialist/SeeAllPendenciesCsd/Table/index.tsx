import React from 'react'
import { TableProps } from '../types/index'
import Content from './Content'
import Header from './Header'
import { Container } from './styles'

const Table: React.FC<TableProps> = ({ data, order, setOrder }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content dataCSD={data} />
    </Container>
  )
}

export default Table
