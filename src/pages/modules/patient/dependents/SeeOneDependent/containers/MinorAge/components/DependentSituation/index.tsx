import React from 'react'

import { Container, TableInfo } from './styles'
import { ReactComponent as WarningIcon } from '@/assets/icons/warning-circle-red.svg'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active-green.svg'

import { DependentDataType } from '../../types'

type DependentSituationProps = Pick<DependentDataType, 'situation'>

export const DependentSituation: React.FC<DependentSituationProps> = ({
  situation,
}) => {
  const isDefeated =
    new Date() >
    new Date(new Date(situation?.plan.endDate).toLocaleString('pt-br'))

  return (
    <Container>
      <h1>Situação do contrato</h1>
      <h6>Plano:</h6>

      <div>
        {situation?.plan.startDate && (
          <h4>Plano Vida - Paciente desde {situation?.plan.startDate} </h4>
        )}
      </div>

      <h6>Tabela:</h6>
      {situation?.table && (
        <TableInfo isDefeated={isDefeated}>
          Associação à {situation?.table}
          {isDefeated ? ` vencida em ` : ` Válida até `}
          {situation?.plan.endDate}
          {isDefeated && situation?.plan.endDate && <WarningIcon />}
          {!isDefeated && situation?.plan.endDate && <ActiveIcon />}
        </TableInfo>
      )}
    </Container>
  )
}
