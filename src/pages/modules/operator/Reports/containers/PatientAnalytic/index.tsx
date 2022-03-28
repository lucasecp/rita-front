import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState } from 'react'

import { Filters } from './containers/Filters'
import { Generates } from './containers/Generates'
import { PatientPreview } from './containers/PatientPreview'

import { Container } from './styles'

import { MultiSelectOption } from '@/components/Form/MultSelect'

export interface PatientAnalyticPreviewState {
  columns?: MultiSelectOption[]
  patients: {
    id: string
    beneficiaryType: string
    contractNumber: string
    name: string
    cpf: string
    birthDate: string
    email: string
    gender: string
    plan: string
    table: string
    phone: string
    address: string
    number: string
    complement: string
    district: string
    city: string
    uf: string
    cep: string
    status: string
    registerDate?: string
    exclusionDate?: string
    validationDate?: string
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

export const PatientAnalytic: React.FC = () => {
  const [generatePreview, setGeneratePreview] = useState(0)
  const [patientAnalyticPreview, setPatientAnalyticPreview] = useState(
    {} as PatientAnalyticPreviewState,
  )
  const [pdfHasBeenDisabledBy, setPdfHasBeenDisabledBy] = useState(
    {} as PdfHasBeenDisabledByState,
  )
  const [reportCanBeGenerated, setReportCanBeGenerated] = useState(false)
  const [generateReport, setGenerateReport] = useState(
    {} as GenerateReportState,
  )

  return (
    <DefaultLayout title="Empresa - Relatório Analítico de Beneficiários">
      <Container>
        <Filters
          generatePreview={generatePreview}
          onGetReportCanBeGenerated={setReportCanBeGenerated}
          onGetPatientAnalyticPreview={setPatientAnalyticPreview}
          onGetPdfHasBeenDisabledBy={setPdfHasBeenDisabledBy}
          generateReport={generateReport}
        />
        <Generates
          onGetGeneratePreview={setGeneratePreview}
          reportCanBeGenerated={reportCanBeGenerated}
          pdfHasBeenDisabledBy={pdfHasBeenDisabledBy}
          onGetGenerateReport={setGenerateReport}
        />
        <PatientPreview
          patientAnalyticPreview={patientAnalyticPreview}
          pdfHasBeenDisabledBy={pdfHasBeenDisabledBy}
        />
      </Container>
    </DefaultLayout>
  )
}
