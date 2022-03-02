import { useEffect, useState } from 'react'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ResetIcon } from '@/assets/icons/reset.svg'
import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'
import { ReactComponent as InactivateIcon } from '@/assets/icons/inactivate-grid.svg'
import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'
import CustomTooltip from '@/components/Tooltip'
import { User } from '../../../../../../@types'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'
import { SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'

interface ActionProps {
  userData: User
}

export const Actions: React.FC<ActionProps> = ({ userData }) => {
  const history = useHistory()

  const [iconsToShow, setIconsToShow] = useState('')

  useEffect(() => {
    const { status, blocked } = userData

    if (status === 'Ativo' && blocked === 'Não')
      return setIconsToShow('Inativar')
    if (status === 'Inativo' && blocked === 'Não')
      return setIconsToShow('Ativar')
    if (status === 'Ativo' && blocked === 'Sim')
      return setIconsToShow('Desbloquear')
  }, [])

  const onSeeUser = () => {
    history.push(SEE_ONE_USER, {
      id: userData.id,
    })
  }

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon onClick={onSeeUser} />
      </CustomTooltip>
      {iconsToShow === 'Desbloquear' && (
        <CustomTooltip label="Desbloquear">
          <UnlockIcon
            onClick={() => {
              console.log('Ação')
            }}
          />
        </CustomTooltip>
      )}
      {iconsToShow === 'Inativar' && (
        <CustomTooltip label="Inativar">
          <InactivateIcon
            onClick={() => {
              console.log('Ação')
            }}
          />
        </CustomTooltip>
      )}
      {iconsToShow === 'Ativar' && (
        <CustomTooltip label="Ativar">
          <ActivateIcon
            onClick={() => {
              console.log('Ação')
            }}
          />
        </CustomTooltip>
      )}
      <CustomTooltip label="Resetar Senha">
        <ResetIcon
          onClick={() => {
            console.log('Ação')
          }}
        />
      </CustomTooltip>
    </Container>
  )
}
