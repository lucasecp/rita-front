import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types/index'

const Results: React.FC<TableProps> = ({ dependents, hidden }) => {
  return (
    <Container hidden={hidden}>
      <Header />
      <Content dependents={dependents} />
    </Container>
  )
}

export default Results
