import React from 'react'
import moment from 'moment'

import { CreditCardForm } from '@/pages/Wallet/components/CreditCardForm'
import { Container } from './styles'

export const Payment: React.FC = () => {
  async function handleFormSubmit(model: any) {
    const [month, year] = model.expireAt.split('/')

    console.log('data', {
      number: model.number,
      holder: model.name,
      expirationDate: moment()
        .set({
          year: 2000 + Number(year),
          month: Number(month) - 1,
        })
        .toISOString(),
      cvv: model.securityCode,
      alias: model.name,
      asDefault: model.asDefault
    })
  }

  return (
    <Container>
      <CreditCardForm onSubmit={handleFormSubmit} />
    </Container>
  )
}
