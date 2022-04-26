// import type { ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import { useAuth } from '@/hooks/login'
import { useModal } from '@/hooks/useModal'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PaymentForm } from '@/pages/modules/patient/WalletSettings/components/PaymentForm'

// import { ReactComponent as AlipayLogo } from '@/assets/logo/credit-cards/alipay.svg'
// import { ReactComponent as AmexLogo } from '@/assets/logo/credit-cards/amex.svg'
// import { ReactComponent as DinersLogo } from '@/assets/logo/credit-cards/diners.svg'
// import { ReactComponent as DiscoverLogo } from '@/assets/logo/credit-cards/discover.svg'
// import { ReactComponent as EloLogo } from '@/assets/logo/credit-cards/elo.svg'
// import { ReactComponent as HiperLogo } from '@/assets/logo/credit-cards/hiper.svg'
// import { ReactComponent as HipercardLogo } from '@/assets/logo/credit-cards/hipercard.svg'
// import { ReactComponent as JCBLogo } from '@/assets/logo/credit-cards/jcb.svg'
// import { ReactComponent as MaestroLogo } from '@/assets/logo/credit-cards/maestro.svg'
// import { ReactComponent as MastercardLogo } from '@/assets/logo/credit-cards/mastercard.svg'
// import { ReactComponent as MirLogo } from '@/assets/logo/credit-cards/mir.svg'
// import { ReactComponent as PaypalLogo } from '@/assets/logo/credit-cards/paypal.svg'
// import { ReactComponent as UnionPayLogo } from '@/assets/logo/credit-cards/unionpay.svg'
// import { ReactComponent as VisaLogo } from '@/assets/logo/credit-cards/visa.svg'
import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { Container } from './styles'

// const creditCardLogos: Record<string, ReactNode> = {
//   alipay: <AlipayLogo />,
//   amex: <AmexLogo />,
//   diners: <DinersLogo />,
//   discover: <DiscoverLogo />,
//   elo: <EloLogo />,
//   hiper: <HiperLogo />,
//   hipercard: <HipercardLogo />,
//   jcb: <JCBLogo />,
//   maestro: <MaestroLogo />,
//   mastercard: <MastercardLogo />,
//   mir: <MirLogo />,
//   paypal: <PaypalLogo />,
//   unionpay: <UnionPayLogo />,
//   visa: <VisaLogo />,
// }

export const WalletSettings: React.FC = () => {
  const { user } = useAuth()
  const { showConfirmation } = useModal()
  const [creditCardItems, setCreditCardItems] = useState<RitaWallet.API.Get.UserCreditCard>([])

  async function fetchData() {
    const { data } = await apiWallet.get<RitaWallet.API.Get.UserCreditCard>('/user/credit-card')

    if (!data || !Array.isArray(data)) {
      throw new Error('Resposta vazia ou inválida')
    }

    setCreditCardItems(data)
  }

  async function handleItemRemove(itemRemoved: any) {
    showConfirmation({
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
      }
    })

    fetchData().catch(console.error)
  }

  async function handleFormSubmit(model: any) {
    const [month, year] = model.expireAt.split('/')

    await apiWallet.post('/user/credit-card', {
      number: model.number,
      name: model.name,
      expirationDate: moment().set({
        year: 2000 + Number(year),
        month: Number(month) - 1,
      }).toISOString(),
      cvv: model.securityCode,
      alias: 'abc-123',
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
                <div key={index}>
                  <div>
                    <h4>****.****.****.{item.lastFourDigits}</h4>
                    <h5>{item.alias}</h5>
                  </div>
                  <div>
                    <span>{item.alias}</span>
                    {item.alias}
                  </div>
                  <button type="button" onClick={() => handleItemRemove(item)}>
                    <TimesCircleIcon />
                  </button>
                </div>
              ))}
            </section>
          </section>
        )}
        <section>
          <h3>Adicionar cartão</h3>
          <PaymentForm onSubmit={handleFormSubmit} />
        </section>
      </Container>
    </DefaultLayout>
  )
}
