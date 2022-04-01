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
  onGetMessage: React.Dispatch<React.SetStateAction<number>>
}

export const Actions: React.FC<ActionProps> = ({ userData, onGetMessage }) => {
  return (
    <Container>
      <SeeUser userData={userData} />
      {userData.status === 'Ativo' && userData.blocked === 'Sim' && (
        <UnlockUser userData={userData} onGetMessage={onGetMessage} />
      )}
      {userData.status === 'Ativo' && userData.blocked === 'Não' && (
        <InactivateUser userData={userData} onGetMessage={onGetMessage} />
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Não' && (
        <ActivateUser userData={userData} onGetMessage={onGetMessage} />
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Sim' && (
        <UnlockUser userData={userData} onGetMessage={onGetMessage} />
      )}
    </Container>
  )
}
