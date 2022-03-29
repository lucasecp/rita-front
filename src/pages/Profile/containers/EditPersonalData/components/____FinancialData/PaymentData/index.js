import React, { useEffect, useState } from 'react'
import { getCreditCardNameByNumber } from 'creditcard.js'
import { Container } from './styles'

import { ReactComponent as CreditCardIcon } from '@/assets/icons/credit-card.svg'
import { FinancialList } from '../FinancialList'
import { PaymentForm } from '../../../../../../modules/patient/WalletSettings/components/PaymentForm'

export const PaymentData = () => {
  const [items, setItems] = useState([])
  const [formIsVisible, setFormIsVisible] = useState(false)

  useEffect(() => {
    // @TODO: api.get credit card
    const creditCards = [
      {
        brandId: 'master',
        brandName: 'Mastercard',
        number: '****.****.****.1234',
        expireAt: '11/25',
        active: true,
      },
      {
        brandId: 'visa',
        brandName: 'Visa',
        number: '****.****.****.5678',
        expireAt: '11/21',
        active: false,
      },
    ]
    const loadedItems = []

    for (const card of creditCards) {
      const newItem = {
        title: card.brandName.toUpperCase(),
        data: [card.number, card.expireAt],
        active: card.active,
        disabled: !card.active,
      }

      if (!card.active) {
        newItem.data.push(<strong>Expirado</strong>)
      }

      loadedItems.push(newItem)
    }

    setItems(loadedItems)
  }, [])

  function handleFormSubmit(model) {
    // console.log('handleFormSubmit credit card model', model)
    // @TODO: api.post add credit card
    setItems([
      ...items,
      {
        title: getCreditCardNameByNumber(model.number).toUpperCase(),
        data: [`****.****.****.${model.number.slice(-4)}`, model.expireAt],
        active: true,
      },
    ])
    setFormIsVisible(false)
  }

  function handleItemRemove(itemRemoved) {
    // console.log('handleItemRemove credit card itemRemoved', itemRemoved)
    // @TODO: api.delete credit card
    const newItems = items.filter((item) => item !== itemRemoved)
    setItems(newItems)
  }

  return (
    <Container>
      <h4>Pagamento</h4>
      {formIsVisible && (
        <PaymentForm
          onSubmit={handleFormSubmit}
          onCancel={() => setFormIsVisible(false)}
        />
      )}
      {!formIsVisible && (
        <section>
          <FinancialList
            icon={<CreditCardIcon />}
            items={items}
            textAdd="Cadastrar Cartão de Crédito para pagamentos"
            onItemAdd={() => setFormIsVisible(true)}
            onItemRemove={handleItemRemove}
          />
        </section>
      )}
    </Container>
  )
}
