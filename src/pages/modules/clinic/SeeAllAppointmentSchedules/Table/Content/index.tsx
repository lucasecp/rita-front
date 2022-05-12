import React from 'react'
import { Container, Status } from './styles'
import { showStatus } from '../../helpers/showStatus'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import Actions from './Actions'

const Content: React.FC<ContentProps> = ({ specialists, setMakeRequest }) => {
  return (
    <Container>
      {specialists?.data?.map((spec, index) => (
        <ul key={index}>
          <li>
            <CustomTooltip label={firstLetterCapitalize(spec.name)}>
              <div>
                {formatTextWithLimit(firstLetterCapitalize(spec.name), 33) ||
                  '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>{spec.cpf}</li>
          <li>{spec.registerNumber}</li>
          <li>{spec.issuingAgency?.name}</li>
          <Status type={showStatus(spec.status)}>
            <span>{showStatus(spec.status)}</span>
          </Status>
          <Actions data={spec} setMakeRequest={setMakeRequest} />
        </ul>
      ))}

      {!specialists.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
