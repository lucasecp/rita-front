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

  const showPlan = !!situation?.plan.startDate
  const showTable = !!situation?.table && !!situation?.plan.endDate

  return (
    <Container>
      <h1>Situação do contrato</h1>
      <h6>Plano:</h6>

      <div>
        {showPlan && (
          <h4>
            Plano {situation?.plan.name} - Paciente desde
            {situation?.plan.startDate}
          </h4>
        )}
      </div>

      <h6>Tabela:</h6>
      {showTable && (
        <TableInfo isDefeated={isDefeated}>
          Associação à {situation?.table}
          {isDefeated ? ` vencida em ` : ` válida até `}
          {situation?.plan.endDate}
          {isDefeated && situation?.plan.endDate && <WarningIcon />}
          {!isDefeated && situation?.plan.endDate && <ActiveIcon />}
        </TableInfo>
      )}
    </Container>
  )
}
