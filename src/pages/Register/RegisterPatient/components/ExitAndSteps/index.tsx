import React from 'react'

import { useModal } from '@/hooks/useModal'
import { StepProgressBar } from './components/StepProgressBar'

import exitImg from '@/assets/icons/times.svg'
import { ConfirmExit } from './messages/ConfirmExit'

import { Container } from './styles'
import { useRegisterPatient } from '../../hooks'

export const ExitAndSteps: React.FC = () => {
  const { showMessage } = useModal()
  const { currentStep } = useRegisterPatient()

  const onExitRegister = () => {
    showMessage(ConfirmExit)
  }

  return (
    <Container>
      <button onClick={onExitRegister}>
        Sair
        <img src={exitImg} />
      </button>
      <StepProgressBar currentStep={currentStep} />
    </Container>
  )
}
