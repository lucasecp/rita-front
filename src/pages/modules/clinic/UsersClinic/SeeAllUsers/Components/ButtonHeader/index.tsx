import ButtonPrimary from '@/components/Button/Primary'
<<<<<<< HEAD:src/pages/modules/clinic/UsersClinic/SeeAllUsers/Components/ButtonHeader/index.tsx
import { CLINIC_CREATE_USERS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router-dom'

const ButtonHeader = () => {
  const history = useHistory()
=======

const ButtonHeader: React.FC = () => {
>>>>>>> 5abfa6a601c69bf925b10d78c8842afe21054dfe:src/pages/modules/clinic/SeeAllUsers/Components/ButtonHeader/index.tsx
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
