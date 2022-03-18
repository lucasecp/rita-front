import React, { useCallback } from 'react'

import { Container } from './styles'
import { FieldsBilling } from './components/FieldsBilling'
import { PdfHasBeenDisabledByState, PreviewBillingsState } from '../..'

interface BillingPreviewProps {
  previewBillings: PreviewBillingsState
  pdfHasBeenDisabledBy: PdfHasBeenDisabledByState
}

export const BillingPreview: React.FC<BillingPreviewProps> = ({
  previewBillings,
  pdfHasBeenDisabledBy,
}) => {
  const isActiveColumn = useCallback(
    (columnId: string) => {
      return previewBillings.columns?.some((column) => column.id === columnId)
    },
    [previewBillings.columns],
  )

  return (
    <Container>
      {!!previewBillings?.total && (
        <>
          <p>Foram encontrados: {previewBillings?.total} registros</p>
          {(pdfHasBeenDisabledBy.amountOfRecords ||
            pdfHasBeenDisabledBy.amountOfColumns) && (
            <small>
              Devido a grande quantidade de{' '}
              {pdfHasBeenDisabledBy.amountOfRecords ? 'registros' : 'colunas'},
              a opção de PDF foi desabilitada
            </small>
          )}

          <div>
            <FieldsBilling columns={previewBillings.columns} />
            <div>
              {previewBillings.patients?.map((patient) => (
                <ul key={patient.id}>
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
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </>
      )}
      {previewBillings?.total === 0 && <h4>Nenhum resultado encontrado.</h4>}
    </Container>
  )
}
