import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonLink from '@/components/Button/Link'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { ExitAndSteps } from '../shared/components/ExitAndSteps'
import { DocumentFiles } from './components/DocumentFiles'

import { Container } from './styles'
import { useMessage } from '@/hooks/useMessage'

export const Documents: React.FC = () => {
  const [saveDocuments, sendSaveDocuments] = useMessage()

  const onPreviousStep = () => {
    // previous page
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
