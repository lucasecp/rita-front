import React from 'react'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import OutlineButton from '@/components/Button/Outline'

const Content: React.FC<ContentProps> = ({ dependents }) => {
  return (
    <Container>
      {dependents?.map((dependent, index) => (
        <ul key={index}>
          <li>{dependent.cpf}</li>
          <li>
            <CustomTooltip label={dependent.name}>
              <div>{dependent.name}</div>
            </CustomTooltip>
          </li>
          <li>
            <OutlineButton>Desassociar</OutlineButton>
          </li>
        </ul>
      ))}
      {dependents?.length === 0 ||
        (!dependents && <h2>Nenhum resultado encontrado</h2>)}
    </Container>
  )
}

export default Content
