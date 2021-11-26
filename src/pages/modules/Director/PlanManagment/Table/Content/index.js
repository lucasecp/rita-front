import React from 'react'
import { Container, Status } from './styles'
import Actions from './Actions'
import { showStatus } from '../../helpers/showStatus'
import formatDate from '@/helpers/formatDate'

const Content = ({ plans }) => {
  return (
    <Container>
      {plans?.dados?.map((plan, index) => (
        <ul key={index}>
          <li>{formatDate(plan.dataAtivacao) || '-'}</li>
          <li>{formatDate(plan.dataTermino) || '-'}</li>
          <li>{plan.codigo || '-'}</li>
          <li>{plan.nome || '-'}</li>
          <Status type={showStatus(plan.status)}>
            <span>{showStatus(plan.status) || '-'}</span>
          </Status>
          <Actions status={showStatus(plan.status)} />
        </ul>
      ))}
      {!plans.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
