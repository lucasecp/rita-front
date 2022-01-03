import React from 'react'

import { Container } from './styles'
import { ReactComponent as WarningIcon } from '@/assets/icons/warning-circle-red.svg'

export const Situation = ({ address, setAddress, isEditing }) => {
  return (
    <Container>
      <h1>Situação do contrato</h1>
      <h6>Plano:</h6>

      <div>
        <h4>Plano Vida - Paciente desde 03/10/2021 </h4>
      </div>

      <h6>Tabela:</h6>
      <p>
        Associação à Tabela Especial vencida em 10/12/2021 <WarningIcon />
      </p>
    </Container>
  )
}
