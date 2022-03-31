import { User } from '../../../../../../@types'

import { SeeUser } from './components/SeeUser'
import { UnlockUser } from './components/UnlockUser'
import { InactivateUser } from './components/InactivateUser'
import { ActivateUser } from './components/ActivateUser'

import { Container } from './styles'

interface ActionProps {
  userData: User
}

export const Actions: React.FC<ActionProps> = ({ userData }) => {
  return (
    <Container>
      <SeeUser userId={userData.id} />
      {userData.status === 'Ativo' && userData.blocked === 'Sim' && (
        <UnlockUser userId={userData.id} />
      )}
      {userData.status === 'Ativo' && userData.blocked === 'Não' && (
        <InactivateUser userId={userData.id} />
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Não' && (
        <ActivateUser userId={userData.id} />
      )}
      {/* <CustomTooltip label="Resetar Senha">
        <ResetIcon
          onClick={() => {
            console.log('Ação')
          }}
        />
      </CustomTooltip> */}
    </Container>
  )
}
