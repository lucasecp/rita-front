import React from 'react'
import { useHistory } from 'react-router-dom'

import CustomTooltip from '@/components/Tooltip'

import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'

import { SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'

interface SeeUserProps {
  userId: number
}

export const SeeUser: React.FC<SeeUserProps> = ({ userId }) => {
  const history = useHistory()

  const onSeeUser = () => {
    history.push(SEE_ONE_USER, {
      id: userId,
    })
  }

  return (
    <CustomTooltip label="Visualizar">
      <EyePurpleIcon onClick={onSeeUser} />
    </CustomTooltip>
  )
}
