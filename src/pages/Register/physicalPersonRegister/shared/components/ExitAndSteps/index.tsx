import React from 'react'

import { StepProgressBar } from './components/StepProgressBar'

import { ConfirmExit } from './messages/ConfirmExit'

import exitImg from '@/assets/icons/times.svg'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

interface ExitAndStepsProps {
  currentStep: number
}

export const ExitAndSteps: React.FC<ExitAndStepsProps> = ({ currentStep }) => {
  const { showMessage } = useModal()

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
