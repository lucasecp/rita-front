import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonLink from '@/components/Button/Link'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { ExitAndSteps } from '../shared/ExitAndSteps'
import { DocumentFiles } from './components/DocumentFiles'

import { Container } from './styles'

export const Documents: React.FC = () => {
  const onPreviousStep = () => {
    // previous page
  }

  const onNextStep = () => {
    // check errors in documentsFile
    // next page
  }

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps currentStep={3} />
        <DocumentFiles />
        <footer>
          <ButtonLink onClick={onPreviousStep}>Etapa Anterior</ButtonLink>
          <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
