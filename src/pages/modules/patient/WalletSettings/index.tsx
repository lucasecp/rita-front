import type { ReactNode } from 'react'
import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWalletMock'
import { ReactComponent as AlipayLogo } from '@/assets/logo/credit-cards/alipay.svg'
import { ReactComponent as AmexLogo } from '@/assets/logo/credit-cards/amex.svg'
import { ReactComponent as DinersLogo } from '@/assets/logo/credit-cards/diners.svg'
import { ReactComponent as DiscoverLogo } from '@/assets/logo/credit-cards/discover.svg'
import { ReactComponent as EloLogo } from '@/assets/logo/credit-cards/elo.svg'
import { ReactComponent as HiperLogo } from '@/assets/logo/credit-cards/hiper.svg'
import { ReactComponent as HipercardLogo } from '@/assets/logo/credit-cards/hipercard.svg'
import { ReactComponent as JCBLogo } from '@/assets/logo/credit-cards/jcb.svg'
import { ReactComponent as MaestroLogo } from '@/assets/logo/credit-cards/maestro.svg'
import { ReactComponent as MastercardLogo } from '@/assets/logo/credit-cards/mastercard.svg'
import { ReactComponent as MirLogo } from '@/assets/logo/credit-cards/mir.svg'
import { ReactComponent as PaypalLogo } from '@/assets/logo/credit-cards/paypal.svg'
import { ReactComponent as UnionPayLogo } from '@/assets/logo/credit-cards/unionpay.svg'
import { ReactComponent as VisaLogo } from '@/assets/logo/credit-cards/visa.svg'
import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { Container } from './styles'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PaymentForm } from '@/pages/modules/patient/WalletSettings/components/PaymentForm'

const creditCardLogos: Record<string, ReactNode> = {
  alipay: <AlipayLogo />,
  amex: <AmexLogo />,
  diners: <DinersLogo />,
  discover: <DiscoverLogo />,
  elo: <EloLogo />,
  hiper: <HiperLogo />,
  hipercard: <HipercardLogo />,
  jcb: <JCBLogo />,
  maestro: <MaestroLogo />,
  mastercard: <MastercardLogo />,
  mir: <MirLogo />,
  paypal: <PaypalLogo />,
  unionpay: <UnionPayLogo />,
  visa: <VisaLogo />,
}

type CreditCardItem = {
  id: number
  number: string
  name: string
  expireAt: string
  brandImage: ReactNode
}

export const WalletSettings: React.FC = () => {
  const [creditCardItems, setCreditCardItems] = useState<CreditCardItem[]>([])

  useEffect(() => {
    async function fetchData () {
      const { data } = await apiWallet.get('/credit-card')

      if (data && Array.isArray(data))  {
        const loadedItems = []

        for (const row of data) {
          loadedItems.push({
            id: row.id,
            number: row.number,
            name: row.name,
            expireAt: row.expireAt,
            brandImage: creditCardLogos[row.brandId],
          })
        }

        setCreditCardItems(loadedItems)
      }
    }

    fetchData().catch(console.error)
  }, [])

  async function handleItemRemove(itemRemoved: any) {
    console.log('handleItemRemove credit card itemRemoved', itemRemoved)
    await apiWallet.delete(`/credit-card/${itemRemoved.id}`)

    const newItems = creditCardItems.filter((item) => item !== itemRemoved)
    setCreditCardItems(newItems)
  }

  async function handleFormSubmit(model: any) {
    console.log('handleFormSubmit credit card model', model)
    await apiWallet.post('/credit-card', {
      number: model.number,
      name: model.name,
      expireAt: model.expireAt
    })

    setCreditCardItems([
      ...creditCardItems,
      {
        id: new Date().getTime(),
        number: `**** **** **** ${model.number.slice(-4)}`,
        name: model.name,
        expireAt: model.expireAt,
        brandImage: <VisaLogo />, // @TODO: load logo dynamically
      },
    ])
  }

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        {creditCardItems.length === 0 ? (
          <section className="empty">
            <p>
              Você ainda não tem uma forma de pagamento cadastrada. <a href="#form">Cadastre abaixo.</a>
            </p>
          </section>
        ) : (
          <section>
            <h3>Seus cartões</h3>
            <section>
              {creditCardItems.map((item, index) => (
                <div key={index}>
                  <div>
                    <h4>{item.number}</h4>
                    <h5>{item.name}</h5>
                  </div>
                  <div>
                    <span>{item.expireAt}</span>
                    {item.brandImage}
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