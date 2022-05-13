import React from 'react'
import moment from 'moment'

import { useDialog } from '@/hooks/useDialog'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { CreditCardForm } from '@/pages/Wallet/components/CreditCardForm'
import { Container } from './styles'

export const Payment: React.FC = () => {
  const { dialogConfirmation } = useDialog()

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

  function handleFormCancel() {
    dialogConfirmation({
      message: 'Tem certeza que deseja cancelar a adição de um cartão? Você pode adicioná-lo mais tarde dentro da página Configurações no menu Carteira Digital.',
      onTruthy: async () => {
        console.log('truthy')
        // redirect
      },
    })
  }

  return (
    <RegisterLayout>
      <Container>
        <h3>Adicionar cartão</h3>
        <h5>
          Cadastre seu cartão de crédito ou débito para realizar transações
          financeiras
        </h5>
        <CreditCardForm
          resetOnCancel={false}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </Container>
    </RegisterLayout>
  )
}
