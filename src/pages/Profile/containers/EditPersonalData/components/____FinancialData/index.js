import React from 'react'
import { Container } from './styles'

import { PaymentData } from './PaymentData'
import { ReceptionData } from './ReceptionData'

export const FinancialData = () => {
  return (
    <Container>
      <h3>Dados Financeiros</h3>
      <section>
        <PaymentData />
        <ReceptionData />
      </section>
    </Container>
  )
}
