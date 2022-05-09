import ButtonPrimary from '@/components/Button/Primary'
import { CLINIC_CREATE_USERS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router-dom'

const ButtonHeader = () => {
  const history = useHistory()
  return (
    <ButtonPrimary
      medium
      onClick={() => history.push(CLINIC_CREATE_USERS)}
    >
      Incluir
    </ButtonPrimary>
  )
}

export default ButtonHeader
