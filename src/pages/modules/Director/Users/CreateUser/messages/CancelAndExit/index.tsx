import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'
import { FILTER_USERS } from '@/routes/constants/namedRoutes/routes'

export const CancelAndExit: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    history.push(FILTER_USERS)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        As alterações não serão salvas.
        <br />
        Confirma a saída?
      </p>
      <footer>
        <ButtonPrimary onClick={onDoNotConfirmExit}>Não</ButtonPrimary>
        <OutlineButton onClick={onConfirmExit}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}