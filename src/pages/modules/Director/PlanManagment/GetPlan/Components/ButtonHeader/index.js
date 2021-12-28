import ButtonPrimary from '@/components/Button/Primary'
import { DIRECTOR_CREATE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router'

const ButtonHeader = () => {
  const history = useHistory()

  return (
    <ButtonPrimary
      medium
      onClick={() => history.push(DIRECTOR_CREATE_PLAN_MANAGMENT)}
    >
      Incluir
    </ButtonPrimary>
  )
}

export default ButtonHeader
