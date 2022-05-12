import React, { useState, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import { useAuth } from '@/hooks/login'
import { useDialog } from '@/hooks/useDialog'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { WalletCreditCard } from '@/pages/Wallet/components/CreditCard'
import { CreditCardForm } from '@/pages/Wallet/components/CreditCardForm'

import { Container } from './styles'

export const WalletPatientSettings: React.FC = () => {
  const { user } = useAuth()
  const { dialogConfirmation } = useDialog()
  const [creditCardItems, setCreditCardItems] =
    useState<RitaWallet.API.Get.UserCreditCard>([])

  async function fetchData() {
    const { data } = await apiWallet.get<RitaWallet.API.Get.UserCreditCard>(
      '/user/credit-card',
    )

    if (!data || !Array.isArray(data)) {
      throw new Error('Resposta vazia ou inválida')
    }

    setCreditCardItems(data)
  }

  async function handleItemRemove(itemRemoved: any) {
    dialogConfirmation({
      message: 'Tem certeza que deseja excluir este cartão?',
      onTruthy: async () => {
        console.log('truthy')
        // await apiWallet.delete('/user/credit-card', {
        //   data: {
        //     id: itemRemoved.id,
        //     user: {
        //       ritaId: String(user.id),
        //       token: user.token,
        //     },
        //   },
        // })
      },
      onFalsy: async () => {
        console.log('falsy')
      },
    })

    fetchData().catch(console.error)
  }

  async function handleFormSubmit(model: any) {
    const [month, year] = model.expireAt.split('/')

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
        ritaId: String(user.id),
        token: user.token,
      },
    })

    fetchData().catch(console.error)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        {creditCardItems.length === 0 ? (
          <section className="empty">
            <p>
              Você ainda não tem uma forma de pagamento cadastrada.{' '}
              <a href="#form">Cadastre abaixo.</a>
            </p>
          </section>
        ) : (
          <section>
            <h3>Seus cartões</h3>
            <section>
              {creditCardItems.map((item, index) => (
                <WalletCreditCard
                  key={index}
                  lastFourDigits={item.lastFourDigits}
                  name={item.alias}
                  expirationDate={item.alias}
                  hasRemoveButton={true}
                  onRemove={() => handleItemRemove(item)}
                />
              ))}
            </section>
          </section>
        )}
        <section>
          <h3>Adicionar cartão</h3>
          <h5>
            Cadastre seu cartão de crédito ou débito para realizar transações
            financeiras
          </h5>
          <CreditCardForm onSubmit={handleFormSubmit} />
        </section>
      </Container>
    </DefaultLayout>
  )
}
