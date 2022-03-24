import React from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import { TableProps } from '@/pages/modules/operator/IssuingAgency/SeeAllIssuingAgency/types'

const Table: React.FC<TableProps> = ({
  issuingAgency,
  order,
  setOrder,
  setIssuingAgency,
}) => {
  return (
    <Container>
      <Header order={order} setOrder={setOrder} />
      <Content
        issuingAgency={issuingAgency}
        setIssuingAgency={setIssuingAgency}
      />
    </Container>
  )
}

export default Table
