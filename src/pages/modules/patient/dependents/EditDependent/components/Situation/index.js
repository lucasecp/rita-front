import React from 'react'

import { Container, TableInfo } from './styles'
import { ReactComponent as WarningIcon } from '@/assets/icons/warning-circle-red.svg'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active-green.svg'

export const Situation = ({ data }) => {
  const isDefeated =
    new Date() > new Date(new Date(data?.plan.endDate).toLocaleString('pt-br'))

  return (
    <Container>
      <h1>Situação do contrato</h1>
      <h6>Plano:</h6>

      <div>
        {data?.plan.startDate && (
          <h4>Plano Vida - Paciente desde {data?.plan.startDate} </h4>
        )}
      </div>

      <h6>Tabela:</h6>
      {data?.table && (
        <TableInfo isDefeated={isDefeated}>
          Associação à {data?.table}
          {isDefeated ? ` vencida em ` : ` Válida até `}
          {data?.plan.endDate}
          {isDefeated && data?.plan.endDate && <WarningIcon />}
          {!isDefeated && data?.plan.endDate && <ActiveIcon />}
        </TableInfo>
      )}
    </Container>
  )
}
