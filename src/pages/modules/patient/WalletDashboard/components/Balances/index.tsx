import React, { useState, useEffect } from 'react'

import { Container } from './styles'

import formatPrice from '@/helpers/formatPrice'

export const Balances: React.FC = () => {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    // @TODO: api.get balances
    const loadedItems = [
      {
        total: 450,
        reserved: 1200,
      },
      {
        total: 150,
        reserved: 400,
      },
      {
        total: 150,
        reserved: 400,
      },
      {
        total: 150,
        reserved: 400,
      },
    ]

    setItems(loadedItems)
  }, [])

  return (
    <Container>
      <h2>Saldos</h2>
      {items && items.length && (
        <section>
          <div>
            <h3>Saldo Total</h3>
            <span>{formatPrice(items[0].total)}</span>
            <p>
              Valor reservado: <strong>{formatPrice(items[0].reserved)}</strong>
            </p>
          </div>
          <div>
            <h3>Saldo em Reais</h3>
            <span>{formatPrice(items[1].total)}</span>
            <p>
              Valor reservado: <strong>{formatPrice(items[1].reserved)}</strong>
            </p>
          </div>
          <div>
            <h3>Saldo em Moeda</h3>
            <span>{formatPrice(items[2].total)}</span>
            <p>
              Valor reservado: <strong>{formatPrice(items[2].reserved)}</strong>
            </p>
          </div>
          <div>
            <h3>Saldo de Cashback</h3>
            <span>{formatPrice(items[3].total)}</span>
            <p>
              Valor reservado: <strong>{formatPrice(items[3].reserved)}</strong>
            </p>
          </div>
        </section>
      )}
    </Container>
  )
}
