import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'

import { Container } from './styles'

export const Balances: React.FC = () => {
  const [totalBalance, setTotalBalance] = useState(0)
  const [totalProvisionedBalance, setTotalProvisionedBalance] = useState(0)
  const [crownBalance, setCrownBalance] = useState(0)
  const [provisionedCrownBalance, setProvisionedCrownBalance] = useState(0)
  const [cashbackBalance, setCashbackBalance] = useState(0)
  const [provisionedCashbackBalance, setProvisionedCashbackBalance] =
    useState(0)

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiWallet.get<RitaWallet.API.Get.Wallet>('/wallet')

      if (!data) {
        throw new Error('Resposta vazia')
      }

      setTotalBalance(data.totalBalanceAmount)
      setTotalProvisionedBalance(data.totalProvisionedBalanceAmount)

      setCrownBalance(data.crownBalance)
      setProvisionedCrownBalance(data.provisionedCrownBalance)

      setCashbackBalance(data.cashbackBalance)
      setProvisionedCashbackBalance(data.provisionedCashbackBalance)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <Container>
      <h2>Saldos</h2>
      <section>
        <div>
          <h3>Saldo Total</h3>
          <span>{formatPrice(totalBalance)}</span>
          <p>
            Valor reservado:{' '}
            <strong>{formatPrice(totalProvisionedBalance)}</strong>
          </p>
        </div>
        <div>
          <h3>Saldo em Reais</h3>
          <span>{formatPrice(totalBalance)}</span>
          <p>
            Valor reservado:{' '}
            <strong>{formatPrice(totalProvisionedBalance)}</strong>
          </p>
        </div>
        <div>
          <h3>Saldo em Moeda</h3>
          <span>{formatPrice(crownBalance)}</span>
          <p>
            Valor reservado:{' '}
            <strong>{formatPrice(provisionedCrownBalance)}</strong>
          </p>
        </div>
        <div>
          <h3>Saldo de Cashback</h3>
          <span>{formatPrice(cashbackBalance)}</span>
          <p>
            Valor reservado:{' '}
            <strong>{formatPrice(provisionedCashbackBalance)}</strong>
          </p>
        </div>
      </section>
    </Container>
  )
}
