import React from 'react'

import { Container, Step } from './styles'

interface StepProgressBarProps {
  currentStep: number
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  currentStep,
}) => {
  return (
    <Container>
      <Step active={currentStep === 1} finish={currentStep >= 2} />
      <Step
        active={currentStep === 2}
        finish={currentStep >= 3}
        waiting={currentStep < 2}
      />
      <Step
        active={currentStep === 3}
        finish={currentStep >= 4}
        waiting={currentStep < 3}
      />
      <Step active={currentStep === 4} waiting={currentStep < 4} />
    </Container>
  )
}
