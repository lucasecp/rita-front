import React from 'react'

import { Container } from './styles'

export const SupplementaryData = () => {
  return (
    <Container>
      <h1>Dados Complementares</h1>
      <h5>Você está no Plano Econômico desde 05/08/2021</h5>
      <div>
        <div>
          Valor:
          <p>R$ 00,00</p>
        </div>
        <div>
          Canal:
          <p>Exemplo</p>
        </div>
        <div>
          Empresa:
          <p>Empresa Exemplo</p>
        </div>
      </div>
    </Container>
  )
}
