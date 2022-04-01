import React from 'react'
import { useHistory } from 'react-router-dom'

import CustomTooltip from '@/components/Tooltip'

import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'

import { SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'

import { User } from '../../index'

interface SeeUserProps {
  userData: User
}

export const SeeUser: React.FC<SeeUserProps> = ({ userData }) => {
  const history = useHistory()

  const onSeeUser = () => {
    history.push(SEE_ONE_USER, {
      id: userData.id,
    })
  }

  return (
    <CustomTooltip label="Visualizar">
      <EyePurpleIcon onClick={onSeeUser} />
    </CustomTooltip>
  )
}
