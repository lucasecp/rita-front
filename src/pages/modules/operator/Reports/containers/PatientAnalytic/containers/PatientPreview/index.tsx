import React, { useCallback } from 'react'

import { Container } from './styles'
import { FieldsPatient } from './components/FieldsPatient'
import { PdfHasBeenDisabledByState, PatientAnalyticPreviewState } from '../..'

interface PatientPreviewProps {
  patientAnalyticPreview: PatientAnalyticPreviewState
  pdfHasBeenDisabledBy: PdfHasBeenDisabledByState
}

export const PatientPreview: React.FC<PatientPreviewProps> = ({
  patientAnalyticPreview,
  pdfHasBeenDisabledBy,
}) => {
  const isActiveColumn = useCallback(
    (columnId: string) => {
      return patientAnalyticPreview.columns?.some(
        (column) => column.id === columnId,
      )
    },
    [patientAnalyticPreview.columns],
  )

  return (
    <Container>
      {!!patientAnalyticPreview?.total && (
        <>
          <p>Foram encontrados: {patientAnalyticPreview?.total} registros</p>
          {(pdfHasBeenDisabledBy.amountOfRecords ||
            pdfHasBeenDisabledBy.amountOfColumns) && (
            <small>
              Devido a grande quantidade de{' '}
              {pdfHasBeenDisabledBy.amountOfRecords ? 'registros' : 'colunas'},
              a opção de PDF foi desabilitada
            </small>
          )}

          <div>
            <FieldsPatient columns={patientAnalyticPreview.columns} />
            <div>
              {patientAnalyticPreview.patients.map((patient) => (
                <ul key={patient.id}>
                  {Object.entries(patient).map(([key, value]) => (
                    <li key={key} hidden={!isActiveColumn(key)}>
                      {value || '-'}
                    </li>
                  ))}
                  {/*
                  <li hidden={!isActiveColumn('id')}>{patient.id || '-'}</li>
                  <li hidden={!isActiveColumn('contractNumber')}>
                    {patient.contractNumber || '-'}
                  </li>
                  <li hidden={!isActiveColumn('beneficiaryType')}>
                    {patient.beneficiaryType || '-'}
                  </li>
                  <li hidden={!isActiveColumn('name')}>
                    {patient.name || '-'}
                  </li>
                  <li hidden={!isActiveColumn('cpf')}>{patient.cpf || '-'}</li>
                  <li hidden={!isActiveColumn('birthDate')}>
                    {patient.birthDate || '-'}
                  </li>
                  <li hidden={!isActiveColumn('gender')}>
                    {patient.gender || '-'}
                  </li>
                  <li hidden={!isActiveColumn('plan')}>
                    {patient.plan || '-'}
                  </li>
                  <li hidden={!isActiveColumn('amountPlan')}>
                    {patient.amountPlan || '-'}
                  </li>
                  <li hidden={!isActiveColumn('phone')}>
                    {patient.phone || '-'}
                  </li>
                  <li hidden={!isActiveColumn('status')}>
                    {patient.status || '-'}
                  </li> */}
                </ul>
              ))}
            </div>
          </div>
        </>
      )}
      {patientAnalyticPreview?.total === 0 && (
        <h4>Nenhum resultado encontrado.</h4>
      )}
    </Container>
  )
}
