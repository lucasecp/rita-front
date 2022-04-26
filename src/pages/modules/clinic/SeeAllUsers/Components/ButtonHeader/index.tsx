import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
//import { CLINIC_SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'
//import { useHistory } from 'react-router-dom'

const ButtonHeader = () => {
  //const history = useHistory()
  return (
    <ButtonPrimary
      medium
      // onClick={() => history.push(CLINIC_SEE_ONE_USER)}
    >
      Incluir
    </ButtonPrimary>
  )
}

export default ButtonHeader
