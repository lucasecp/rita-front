import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types'

const Table: React.FC<TableProps> = ({ specialtys, order, setOrder,setSpecialtys }) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content specialtys={specialtys} setSpecialtys={setSpecialtys}/>
    </Container>
  )
}

export default Table
