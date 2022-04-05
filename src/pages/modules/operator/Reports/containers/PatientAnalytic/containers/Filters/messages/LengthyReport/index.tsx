import React from 'react'
// import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'

import { Container, ButtonsArea } from './styles'

interface LengthyReportProps {
  generatePatientAnalyticReport: () => void
}

export const LengthyReport: React.FC<LengthyReportProps> = ({
  generatePatientAnalyticReport,
}) => {
  const { closeModal } = useModal()

  const onConfirmLengthyReportGeneration = async () => {
    generatePatientAnalyticReport()
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Esse relatório pode demorar um pouco para ser gerado.
        <br />
        Deseja continuar?
      </p>

      <ButtonsArea>
        <ButtonOutline onClick={closeModal}>Não</ButtonOutline>
        <ButtonPrimary onClick={onConfirmLengthyReportGeneration}>
          Sim
        </ButtonPrimary>
      </ButtonsArea>
    </Container>
  )
}
