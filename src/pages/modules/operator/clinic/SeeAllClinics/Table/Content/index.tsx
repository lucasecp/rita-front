import React from 'react'
import { Container, Status } from './styles'
import { showStatus } from '../../helpers/showStatus'
import formatDate from '@/helpers/formatDate'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'

const Content: React.FC<ContentProps> = ({ clinics }) => {
  return (
    <Container>
      {clinics?.data?.map((clinic, index) => (
        <ul key={index}>
          <li>{formatDate(clinic.dataAtivacao) || '-'}</li>
          <li>{formatDate(clinic.dataTermino) || '-'}</li>
          <li>{clinic.codigo || '-'}</li>
          <li>
            <CustomTooltip label={clinic.nome}>
              <div>{formatTextWithLimit(clinic.nome, 33) || '-'}</div>
            </CustomTooltip>
          </li>
          <Status type={showStatus(clinic.status)}>
            <span>{showStatus(clinic.status) || '-'}</span>
          </Status>
        </ul>
      ))}
      {!clinics.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
