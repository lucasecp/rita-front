import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'

import { Filters } from './containers/Filters'
import { Generates } from './containers/Generates'
import { BillingPreview } from './containers/BillingPreview'

import { Container } from './styles'

import { MultiSelectOption } from '@/components/Form/MultSelect'

export interface PreviewBillingsState {
  columns?: MultiSelectOption[]
  patients: {
    id: string
    contractNumber: string
    beneficiaryType: string
    name: string
    cpf: string
    birthDate: string
    gender: string
    plan: string
    amountPlan: string
    ddd: string
    phone: string
    status: string
  }[]
  total: number
}

export interface PdfHasBeenDisabledByState {
  amountOfRecords: boolean
  amountOfColumns: boolean
}

export interface GenerateReportState {
  action: number
  fileTypeReport: string
  lengthyReport: boolean
}

export const BillingStatement: React.FC = () => {
  const [generatePreview, setGeneratePreview] = useState(0)
  const [reportCanBeGenerated, setReportCanBeGenerated] = useState(false)
  const [previewBillings, setPreviewBillings] = useState(
    {} as PreviewBillingsState,
  )
  const [pdfHasBeenDisabledBy, setPdfHasBeenDisabledBy] = useState(
    {} as PdfHasBeenDisabledByState,
  )
  const [generateReport, setGenerateReport] = useState(
    {} as GenerateReportState,
  )

  return (
    <DefaultLayout title="Relatório Demonstrativo de Faturamento">
      <Container>
        <Filters
          generatePreview={generatePreview}
          onGetReportCanBeGenerated={setReportCanBeGenerated}
          onGetPreviewBillings={setPreviewBillings}
          onGetPdfHasBeenDisabledBy={setPdfHasBeenDisabledBy}
          generateReport={generateReport}
        />
        <Generates
          onGetGeneratePreview={setGeneratePreview}
          reportCanBeGenerated={reportCanBeGenerated}
          pdfHasBeenDisabledBy={pdfHasBeenDisabledBy}
          onGetGenerateBillingReport={setGenerateReport}
        />
        <BillingPreview
          previewBillings={previewBillings}
          pdfHasBeenDisabledBy={pdfHasBeenDisabledBy}
        />
      </Container>
    </DefaultLayout>
  )
}
