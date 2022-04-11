/* eslint-env node, jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { PaymentRequestSummary } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    id: '1',
    description: 'Lorem ipsum dolor sit amet',
    debitAmount: 500,
    situation: 'WAITING',
  } as RitaWallet.PaymentRequest
  const items = [
    {
      description: 'Item 1',
      originalPrice: 150,
      discountPrice: 100,
      quantity: 1,
    },
  ] as RitaWallet.PaymentRequestItem[]

  ReactDOM.render(<PaymentRequestSummary data={data} items={items} />, div)
})
