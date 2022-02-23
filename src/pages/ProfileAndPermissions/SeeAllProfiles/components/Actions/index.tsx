import React from 'react'

import { Container } from './styles'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import CustomTooltip from '@/components/Tooltip'
import { DIRECTOR_SEE_ONE_PROFILE } from '@/routes/constants/namedRoutes/routes'

import { useHistory } from 'react-router'
import { ActionDelete } from './Delete'

interface ActionsProps {
  id: number
  usersQuantity: number
  keyProfile: boolean
}

export const Actions: React.FC<ActionsProps> = ({
  id,
  usersQuantity,
  keyProfile,
}) => {
  const history = useHistory()

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
          onClick={() => history.push(DIRECTOR_SEE_ONE_PROFILE, { id })}
        />
      </CustomTooltip>
      <ActionDelete
        id={id}
        usersQuantity={usersQuantity}
        keyProfile={keyProfile}
      />
    </Container>
  )
}
