import React, { ChangeEvent, useState } from 'react'

import { ButtonOneBorder } from '@/components/Button/OneBorder'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import RadioButton from '@/styles/components/RadioButton'
import { RadioGroup } from '@material-ui/core'

import { Container } from './styles'

import { OPERATOR_REPORTS } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'
import { GenerateReportState, PdfHasBeenDisabledByState } from '../..'

interface GeneratesProps {
  onGetGeneratePreview: (generate: number) => void
  reportCanBeGenerated: boolean
  pdfHasBeenDisabledBy: PdfHasBeenDisabledByState
  onGetGenerateBillingReport: ({
    action,
    fileTypeReport,
  }: GenerateReportState) => void
}

export const Generates: React.FC<GeneratesProps> = ({
  onGetGeneratePreview,
  reportCanBeGenerated,
  pdfHasBeenDisabledBy,
  onGetGenerateBillingReport,
}) => {
  const history = useHistory()
  const [fileTypeReport, setFileTypeReport] = useState('xlsx')

  const onCancelBillingStatement = () => {
    history.push(OPERATOR_REPORTS)
  }

  const onGeneratePreview = () => {
    onGetGeneratePreview(Math.random())
  }

  const onChangeFileType = (event: ChangeEvent<HTMLInputElement>) => {
    setFileTypeReport(event.target.value)
  }

  const onGenerateBillingReport = () => {
    onGetGenerateBillingReport({
      action: Math.random(),
      fileTypeReport,
      lengthyReport: pdfHasBeenDisabledBy.amountOfRecords,
    })
  }

  return (
    <Container>
      <div>
        <ButtonOneBorder variation="red" onClick={onCancelBillingStatement}>
          Cancelar
        </ButtonOneBorder>
        <OutlineButton onClick={onGeneratePreview}>Gerar prévia</OutlineButton>
      </div>

      <div>
        <div>
          <h6>Escolha o tipo de arquivo:</h6>
          <RadioGroup
            aria-label="tipo de arquivo"
            name="tipo de arquivo"
            defaultValue="xlsx"
            onChange={onChangeFileType}
            row
          >
            <RadioButton
              label="PDF"
              value="pdf"
              checked={fileTypeReport === 'pdf'}
              disabled={
                !reportCanBeGenerated ||
                Object.values(pdfHasBeenDisabledBy).some((value) => value)
              }
            />
            <RadioButton
              label="XLS"
              value="xlsx"
              checked={fileTypeReport === 'xlsx'}
              disabled={!reportCanBeGenerated}
            />
          </RadioGroup>
        </div>
        <ButtonPrimary
          disabled={!reportCanBeGenerated}
          onClick={onGenerateBillingReport}
        >
          Gerar relatório
        </ButtonPrimary>
      </div>
    </Container>
  )
}
