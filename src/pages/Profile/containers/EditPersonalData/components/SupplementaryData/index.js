import React from 'react'

import { Container } from './styles'

export const SupplementaryData = ({ supplementaryData }) => {
  return (
    <Container>
      <h1>Dados Complementares</h1>
      <h5>
        Você está no Plano {supplementaryData?.contractedPlan} desde{' '}
        {supplementaryData?.contractedPlanSince}
      </h5>
      <div>
        <div>
          Valor:
          <p>{supplementaryData?.price}</p>
        </div>
        <div>
          Canal:
          <p>{supplementaryData?.channel}</p>
        </div>
        {supplementaryData?.channel !== 'Pessoa Física' && (
          <div>
            Empresa:
            <p>{supplementaryData?.company}</p>
          </div>
        )}
      </div>
    </Container>
  )
}
