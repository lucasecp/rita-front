import React from 'react'
import { Container } from './styles'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import { ReactComponent as SuspenseIcon } from '@/assets/icons/suspense.svg'
import CustomTooltip from '@/components/Tooltip'

const Actions = ({status}) => {

  return (
    <Container>

      <CustomTooltip label="Visualizar">
      <EyePurpleIcon />
      </CustomTooltip>

      <CustomTooltip label="Ativar">
      <ActiveIcon hidden={status !== 'Inativo' && status !== 'Suspenso' && status !== 'Pendente'}/>
      </CustomTooltip>

      <CustomTooltip label="Inativar">
      <InactiveIcon hidden={status !== 'Ativo' && status !== 'Suspenso' && status !== 'Pendente'}/>
      </CustomTooltip>


      <CustomTooltip label="Suspender">
      <SuspenseIcon hidden={status !== 'Inativo' && status !== 'Ativo'}/>
      </CustomTooltip>


    </Container>
  )
}

export default Actions
