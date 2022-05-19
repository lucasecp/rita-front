import React, { useEffect } from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import {
  LOGIN,
  PHYSICAL_PERSON_REGISTER_CHOOSE_REGION,
} from '@/routes/constants/namedRoutes/routes'
import formatPrice from '@/helpers/formatPrice'
import apiWallet from '@/services/apiWallet'
import { useDialog } from '@/hooks/useDialog'
import { usePhysicalPersonRegister } from '@/pages/Register/physicalPersonRegister/shared/hooks'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { CreditCardForm } from '@/pages/Wallet/components/CreditCardForm'
import { Container } from './styles'

export const Payment: React.FC = () => {
  const { dialogConfirmation } = useDialog()
  const { registrationData, selectedPlan } = usePhysicalPersonRegister()
  const history = useHistory()

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
      asDefault: model.asDefault,
    })
    await apiWallet.post('/user/credit-card', {
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
      asDefault: model.asDefault,
      user: {
        ritaId: registrationData.get.cpf,
        token: registrationData.get.cpf,
      },
    })
  }

  function handleFormCancel() {
    dialogConfirmation({
      message:
        'Tem certeza que deseja cancelar a adição de um cartão? Você pode adicioná-lo mais tarde dentro da página Configurações no menu Carteira Digital.',
      cancelText: 'Voltar',
      onTruthy() {
        history.push(LOGIN)
      },
    })
  }

  useEffect(() => {
    if (!registrationData.get.cpf) {
      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_REGION)
    }
  }, [])

  return (
    <RegisterLayout>
      <Container>
        <h3>Dados do paciente e plano</h3>
        <section>
          <p>
            CPF: <strong>{registrationData.get.cpf}</strong>
          </p>
          <p>
            Nome do plano: <strong>{selectedPlan.get.name}</strong>
          </p>
          <p>
            Valor do plano:{' '}
            <strong>{formatPrice(selectedPlan.get.price)}</strong>
          </p>
          {selectedPlan.get.periodicity && (
            <p>
              Periodicidade do plano:{' '}
              <strong>
                {selectedPlan.get.periodicity === 'ano' ? 'anual' : 'mensal'}
              </strong>
            </p>
          )}
        </section>

        <h3>Adicionar cartão</h3>
        <h5>
          Cadastre seu cartão de crédito ou débito para realizar transações
          financeiras
        </h5>
        <CreditCardForm
          resetOnCancel={false}
          canUncheckAsDefault={false}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </Container>
    </RegisterLayout>
  )
}
