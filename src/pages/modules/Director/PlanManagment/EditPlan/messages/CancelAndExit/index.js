import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

export const CancelAndExit = ({ idPatient }) => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    history.push(DIRECTOR_PLAN_MANAGMENT)
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
