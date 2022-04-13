import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router-dom'

import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'

const ToConfirmCancel: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const cancel = () => {
    closeModal()
    history.push(DIRECTOR_SEE_ALL_PROFILES)
  }

  return (
    <Container>
      <img src={warning} />
      <p>
        As alterações não serão salvas.
        <br />
        Confirma a saída?
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
        <OutlineButton onClick={cancel}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}

export default ToConfirmCancel
