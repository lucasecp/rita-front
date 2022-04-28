import ButtonPrimary from '@/components/Button/Primary'
import { OPERATOR_CREATE_SPECIALTYS} from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ButtonHeader = () => {
  const history = useHistory()
  return (
    <ButtonPrimary
      medium
      onClick={() => history.push(OPERATOR_CREATE_SPECIALTYS)}
    >
      Incluir
    </ButtonPrimary>
  )
}

export default ButtonHeader
