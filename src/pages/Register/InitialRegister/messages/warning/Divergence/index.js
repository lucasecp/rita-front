import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import { PRE_REGISTER } from '@/routes/constants/namedRoutes/routes'

function Divergence({ company, cpf, email, phone, status }) {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToPreRegister = () => {
    closeModal()
    history.push(PRE_REGISTER, { company, cpf, email, phone, status })
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>Desculpe! Os dados informados estão incorretos.</p>
      <p>Clique em continuar para atualizá-los</p>
      <ButtonPrimary onClick={pushToPreRegister}>Continuar</ButtonPrimary>
    </Container>
  )
}

export default Divergence
