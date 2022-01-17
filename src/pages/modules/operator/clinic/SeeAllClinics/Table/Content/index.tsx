import React from 'react'
import { Container, Status } from './styles'
import { showStatus } from '../../helpers/showStatus'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { OPERATOR_SEE_ONE_CLINIC } from '@/routes/constants/namedRoutes/routes'

const Content: React.FC<ContentProps> = ({ clinics }) => {
  const history = useHistory()

  return (
    <Container>
      {clinics?.data?.map((clinic, index) => (
        <ul
          key={index}
          onClick={() =>
            history.push(OPERATOR_SEE_ONE_CLINIC, { idClinic: clinic.id })
          }
        >
          <li>
            <CustomTooltip label={clinic.name}>
              <div>{clinic.name}</div>
            </CustomTooltip>
          </li>
          <li>{clinic.cnpj}</li>
          <Status type={showStatus(clinic.status)}>
            <span>{showStatus(clinic.status)}</span>
          </Status>
        </ul>
      ))}
      {!clinics.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
