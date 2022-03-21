import React from 'react'

import { Container, Step } from './styles'

import { useRegisterSpecialist } from '../../hooks'

export const StepProgressBar: React.FC = () => {
  const { step } = useRegisterSpecialist()

  return (
    <Container>
      <Step active={step === 1} finish={step >= 2} />
      <Step active={step === 2} finish={step >= 3} waiting={step < 2} />
      <Step active={step === 3} finish={step >= 4} waiting={step < 3} />
      {/* <Step active={step === 4} waiting={step < 4} /> */}
    </Container>
  )
}
