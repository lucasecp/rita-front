import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { useMessage } from '@/hooks/useMessage'
import { PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA } from '@/routes/constants/namedRoutes/routes'
import { ExitAndSteps } from '../shared/components/ExitAndSteps'
import { FieldsAddress } from './components/FieldsAddress'

import { Container } from './styles'

export const Address: React.FC = () => {
  const history = useHistory()
  const [saveAddress, sendSaveAddress] = useMessage()

  const onPreviousStep = () => {
    history.push(PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA)
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
