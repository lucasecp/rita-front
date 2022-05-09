import React from 'react'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import Actions from './Actions'

const Content: React.FC<ContentProps> = ({ users }) => {
  return (
    <Container>
      {users?.data?.map((user, index) => (
        <ul key={index}>
          <li>
            <CustomTooltip label={firstLetterCapitalize(user.nome)}>
              <div>
                {formatTextWithLimit(firstLetterCapitalize(user.nome), 33) ||
                  '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>{user.email}</li>
          <li>{user.perfil[0]?.nome}</li>
          <Actions {...user}/>
        </ul>
      ))}

      {!users.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
