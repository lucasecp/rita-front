import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { useMessage } from '@/hooks/useMessage'
import React from 'react'
import { ExitAndSteps } from '../shared/components/ExitAndSteps'
import { FieldsAddress } from './components/FieldsAddress'

import { Container } from './styles'

export const Address: React.FC = () => {
  const [saveAddress, sendSaveAddress] = useMessage()

  const onPreviousStep = () => {
    
  }

  const onNextStep = () => {
    sendSaveAddress()
  }

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps currentStep={2} />
        <FieldsAddress saveAddress={saveAddress} />
        <footer>
          <ButtonLink onClick={onPreviousStep}>Etapa Anterior</ButtonLink>
          <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
