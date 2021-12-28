import React from 'react'
import { Container, Status } from './styles'
import Actions from './Actions'
import { showStatus } from '../../helpers/showStatus'
import formatDate from '@/helpers/formatDate'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'

const Content: React.FC<ContentProps> = ({ dependents }) => {
  return (
    <Container>
      {dependents?.data?.map((plan, index) => (
        <ul key={index}></ul>
      ))}
      {!dependents.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
