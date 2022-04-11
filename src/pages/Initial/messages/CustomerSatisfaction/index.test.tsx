/* eslint-env node, jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { CustomerSatisfaction } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    id: '1',
    score: null,
    createdAt: '',
    returnedAt: '',
    situation: 'WAITING',
    paymentRequest: {
      description: 'Lorem ipsum dolor sit amet',
    },
  } as RitaWallet.CSAT

  ReactDOM.render(<CustomerSatisfaction data={data} />, div)
})
