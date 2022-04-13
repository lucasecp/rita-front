/* eslint-env node, jest */
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { CustomerSatisfaction } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    id: 'abc-123',
    description: 'Lorem ipsum dolor sit amet',
    transactionType: 'CONSULTA',
    paymentReturnedAt: moment.utc().format()
  } as RitaWallet.API.Get.PaymentCSAT

  ReactDOM.render(<CustomerSatisfaction data={data} />, div)
})
