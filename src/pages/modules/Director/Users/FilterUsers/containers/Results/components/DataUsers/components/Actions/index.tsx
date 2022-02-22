import { Container } from './styles'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ResetIcon } from '@/assets/icons/reset.svg'
import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'
import { ReactComponent as InactivateIcon } from '@/assets/icons/inactivate-grid.svg'
import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'
import CustomTooltip from '@/components/Tooltip'
import { useEffect, useState } from 'react'

interface ActionProps {
  userData: {
    status: string
    blocked: string
  }
}

export const Actions: React.FC<ActionProps> = ({ userData }) => {
  const [iconsToShow, setIconsToShow] = useState('')

  const { status, blocked } = userData

  // status === 'Ativo' && blocked === 'Não' = ['Visualizar', 'Inativar', 'Reset Senha']
  // status === 'Inativo' && blocked === 'Não' = ['Visualizar', 'Ativar', 'Reset Senha']
  // status === 'Ativo' && blocked === 'Sim' = ['Visualizar', 'Desbloquear', 'Reset Senha']

  useEffect(() => {
    if (status === 'Ativo' && blocked === 'Não')
      return setIconsToShow('Inativar')
    if (status === 'Inativo' && blocked === 'Não')
      return setIconsToShow('Ativar')
    if (status === 'Ativo' && blocked === 'Sim')
      return setIconsToShow('Desbloquear')
  }, [])

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
          onClick={() => {
            console.log('Ação')
          }}
        />
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
