/* eslint-env node, jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { PaymentRequestRejection } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    id: '1',
    description: 'Lorem ipsum dolor sit amet',
    debitAmount: 500,
    situation: 'WAITING',
  } as RitaWallet.Model.PaymentRequest

  ReactDOM.render(<PaymentRequestRejection data={data} />, div)
})