import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonLink from '@/components/Button/Link'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { ExitAndSteps } from '../shared/components/ExitAndSteps'
import { DocumentFiles } from './components/DocumentFiles'

import { Container } from './styles'
import { useMessage } from '@/hooks/useMessage'
import { PHYSICAL_PERSON_REGISTER_ADDRESS } from '@/routes/constants/namedRoutes/routes'

export const Documents: React.FC = () => {
  const history = useHistory()
  const [saveDocuments, sendSaveDocuments] = useMessage()

  const onPreviousStep = () => {
    history.push(PHYSICAL_PERSON_REGISTER_ADDRESS)
  }

  const onNextStep = () => {
    sendSaveDocuments()
  }

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps currentStep={3} />
        <DocumentFiles saveDocuments={saveDocuments} />
        <footer>
          <ButtonLink onClick={onPreviousStep}>Etapa Anterior</ButtonLink>
          <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
