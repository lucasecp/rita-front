import React from 'react'
import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types/index'

const Table: React.FC<TableProps> = ({
  specialists,
  order,
  setOrder,
  setMakeRequest,
}) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content specialists={specialists} setMakeRequest={setMakeRequest} />
    </Container>
  )
}

export default Table