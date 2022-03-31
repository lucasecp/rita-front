import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'
import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

export const ComeBack: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    closeModal()
    history.push(PATIENT_DEPENDENTS)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Suas últimas alterações não foram salvas.
        <br />
        Confirma a saída?
      </p>
      <footer>
        <OutlineButton onClick={onDoNotConfirmExit}>Não</OutlineButton>
        <ButtonPrimary onClick={onConfirmExit}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
