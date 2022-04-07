/* eslint-env node, jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { InsufficientBalance } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    walletBalance: 100,
    debitAmount: 500,
  }

  ReactDOM.render(<InsufficientBalance {...data} />, div)
})
