import React from 'react'
import { Container, Status } from './styles'
import Actions from './components/Actions'
import { showStatus } from './adapters/showStatus'
import formatDate from '@/helpers/formatDate'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import CustomTooltip from '@/components/Tooltip'

export const DataSellableItems = ({ filters, order }) => {
  const sellableItems = [
    {
      id: 1,
      code: 'CÓDIGO',
      plan: 'Plano Vida',
      status: 'Inativo',
      outlets: 'Sudeste',
      amount: 'R$ 99,90',
    },
  ]

  return (
    <Container>
      {sellableItems?.map((sellableItem, index) => (
        <ul key={index}>
          <li>{sellableItem.code || '-'}</li>
          <li>{sellableItem.plan || '-'}</li>
          <Status type={sellableItem.status}>
            <span>{sellableItem.status || '-'}</span>
          </Status>
          <li>{sellableItem.outlets || '-'}</li>
          <li>
            <div>{sellableItem.amount || '-'}</div>
          </li>
          <Actions />
        </ul>
      ))}
      {!sellableItems.length && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}
