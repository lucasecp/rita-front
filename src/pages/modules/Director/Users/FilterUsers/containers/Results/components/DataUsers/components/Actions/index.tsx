import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ResetIcon } from '@/assets/icons/reset.svg'
import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'
import { ReactComponent as InactivateIcon } from '@/assets/icons/inactivate-grid.svg'
import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'
import CustomTooltip from '@/components/Tooltip'
import { User } from '../../../../../../@types'
import { useHistory } from 'react-router-dom'

import { useLoading } from '@/hooks/useLoading'

import { Container } from './styles'
import { SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'
import apiUser from '@/services/apiUser'

interface ActionProps {
  userData: User
}

export const Actions: React.FC<ActionProps> = ({ userData }) => {
  const history = useHistory()
  const { Loading } = useLoading()

  const onSeeUser = () => {
    history.push(SEE_ONE_USER, {
      id: userData.id,
    })
  }

  const onUnlockUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userData.id}`, {
        bloqueado: 'N',
      })

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Desbloquear')
    } finally {
      Loading.turnOff()
    }
    console.log('Desbloquear: ', userData)
  }

  const onInactivateUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userData.id}`)

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Inativar')
    } finally {
      Loading.turnOff()
    }
    console.log('Inativar: ', userData)
  }

  const onActiveUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userData.id}`)

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Ativar')
    } finally {
      Loading.turnOff()
    }
    console.log('Ativar: ', userData)
  }

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon onClick={onSeeUser} />
      </CustomTooltip>
      {userData.status === 'Ativo' && userData.blocked === 'Sim' && (
        <CustomTooltip label="Desbloquear">
          <UnlockIcon onClick={onUnlockUser} />
        </CustomTooltip>
      )}
      {userData.status === 'Ativo' && userData.blocked === 'Não' && (
        <CustomTooltip label="Inativar">
          <InactivateIcon onClick={onInactivateUser} />
        </CustomTooltip>
      )}
      {userData.status === 'Inativo' && userData.blocked === 'Não' && (
        <CustomTooltip label="Ativar">
          <ActivateIcon onClick={onActiveUser} />
        </CustomTooltip>
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
