import { SeeUser } from './components/SeeUser'
import { UnlockUser } from './components/UnlockUser'
import { InactivateUser } from './components/InactivateUser'
import { ActivateUser } from './components/ActivateUser'

import { Container } from './styles'

export interface User {
  id: number
  name: string
  login: string
  blocked: string
  profile: string
  status: string
}

interface ActionProps {
  userData: User
  onGetChangeStatusMessage: () => void
}

export const Actions: React.FC<ActionProps> = ({
  userData,
  onGetChangeStatusMessage,
}) => {
  return (
    <Container>
      <SeeUser userData={userData} />
      {userData.status === 'Ativo' && userData.blocked === 'Sim' && (
        <UnlockUser
          userData={userData}
          onGetChangeStatusMessage={onGetChangeStatusMessage}
        />
      )}
      {userData.status === 'Ativo' && userData.blocked === 'Não' && (
        <InactivateUser
          userData={userData}
          onGetChangeStatusMessage={onGetChangeStatusMessage}
        />
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Não' && (
        <ActivateUser
          userData={userData}
          onGetChangeStatusMessage={onGetChangeStatusMessage}
        />
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Sim' && (
        <UnlockUser
          userData={userData}
          onGetChangeStatusMessage={onGetChangeStatusMessage}
        />
      )}
    </Container>
  )
}
