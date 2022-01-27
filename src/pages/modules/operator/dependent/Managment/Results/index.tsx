import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '../types/index'

const Results: React.FC<TableProps> = ({ dependents, hidden, setStep }) => {
  return (
    <Container hidden={hidden}>
      <Header />
      <Content dependents={dependents} setStep={setStep} />
    </Container>
  )
}

export default Results
