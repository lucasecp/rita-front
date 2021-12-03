import ButtonPrimary from '@/components/Button/Primary'
import { MASTERPAGE } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router'

const ButtonHeader = () => {
  const history = useHistory()

  return (
    <ButtonPrimary medium 
    onClick={() => history.push(MASTERPAGE)}
    >
      Incluir
    </ButtonPrimary>
  )
}

export default ButtonHeader