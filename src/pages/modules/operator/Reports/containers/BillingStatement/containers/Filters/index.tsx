import React, { useEffect, useState } from 'react'

import CustomRangePicker from '@/components/Form/CustomRangePicker'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { toast } from '@/styles/components/toastify'

import { useLoading } from '@/hooks/useLoading'

import { Container } from './styles'

import { statusOptions } from './constants/statusOptions'
import { columnsOptions } from './constants/columnsOptions'
import { filtersToApi } from './adapters/toApi'
import { previewBillingsFromApi } from './adapters/fromApi'
import QueryString from 'qs'
import apiPatient from '@/services/apiPatient'
import {
  GenerateReportState,
  PdfHasBeenDisabledByState,
  PreviewBillingsState,
} from '../..'
import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import CompanyMultiSelect from './components/CompanyMultiSelect'
import { LengthyReport } from './messages/LengthyReport'
import { useModal } from '@/hooks/useModal'

interface FiltersProps {
  generatePreview: number
  onGetReportCanBeGenerated: (can: boolean) => void
  onGetPreviewBillings: (previewBillings: PreviewBillingsState) => void
  onGetPdfHasBeenDisabledBy: (
    pdfHasBeenDisabledBy: PdfHasBeenDisabledByState,
  ) => void
  generateReport: GenerateReportState
}

interface ErrorState {
  cnpj?: string
  columns?: string
  status?: string
}

export const Filters: React.FC<FiltersProps> = ({
  generatePreview,
  onGetReportCanBeGenerated,
  onGetPreviewBillings,
  onGetPdfHasBeenDisabledBy,
  generateReport,
}) => {
  const initialStatus = [{ id: 'all', name: 'Todas' }]
  const initialColumns = [
    { id: 'id', name: 'ID' },
    { id: 'beneficiaryType', name: 'Tipo de Beneficiário' },
    { id: 'contractNumber', name: 'Nº do contrato' },
    { id: 'name', name: 'Nome' },
    { id: 'cpf', name: 'CPF' },
    { id: 'plan', name: 'Plano' },
    { id: 'amountPlan', name: 'Valor do plano' },
  ]

  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [cnpj, setCnpj] = useState({} as AutocompleteOptions)

  const [period, setPeriod] = useState('')
  const [status, setStatus] = useState<MultiSelectOption[]>(
    initialStatus as MultiSelectOption[],
  )
  const [columns, setColumns] = useState<MultiSelectOption[]>(initialColumns)

  const [errors, setErrors] = useState<ErrorState>({} as ErrorState)

  const hasErrors = () => {
    let errorsTemporary = {} as ErrorState

    if (!cnpj.value) {
      errorsTemporary = { ...errorsTemporary, cnpj: 'Campo obrigatório ' }
    }

    if (!status.length) {
      errorsTemporary = {
        ...errorsTemporary,
        status: 'Informe pelo menos 1 status',
      }
    }

    if (!columns.length) {
      errorsTemporary = {
        ...errorsTemporary,
        columns: 'Informe pelo menos 1 coluna',
      }
    }

    setErrors(errorsTemporary)

    const hasErrors = Object.values(errorsTemporary).some(
      (value) => value !== '',
    )

    return hasErrors
  }

  useEffect(() => {
    if (generatePreview) {
      const loadPreview = async () => {
        if (hasErrors()) {
          onGetReportCanBeGenerated(false)
          return
        }

        const filtersMapped = filtersToApi({ cnpj, period, status, columns })

        try {
          Loading.turnOn()

          const { data } = await apiPatient.get(
            '/paciente/relatorio-faturamento',
            {
              params: filtersMapped,
              paramsSerializer: (params) => {
                return QueryString.stringify(params, { arrayFormat: 'repeat' })
              },
            },
          )

          const previewBillingsMapped = previewBillingsFromApi(data)

          const findAllOptionInColumns = columns.find(
            (option) => option.id === 'all',
          )

          onGetPdfHasBeenDisabledBy({
            amountOfRecords: previewBillingsMapped.total > 5000,
            amountOfColumns: !!findAllOptionInColumns || columns.length > 9,
          })

          const columnsToApiFiltered = optionsFilteredWithAll(
            columns,
            columnsOptions,
          )

          onGetPreviewBillings({
            ...previewBillingsMapped,
            columns: columnsToApiFiltered,
          })

          onGetReportCanBeGenerated(!!previewBillingsMapped.total)
        } catch (error) {
          toast.error('Erro ao gerar prévia!')
        } finally {
          Loading.turnOff()
        }
      }

      loadPreview()
    }
  }, [generatePreview])

  const generateBillingReport = () => {
    console.log('generating report')
  }

  useEffect(() => {
    if (generateReport.action) {
      if (generateReport.lengthyReport) {
        showMessage(LengthyReport, { generateBillingReport })
        return
      }

      generateBillingReport()
    }
  }, [generateReport.action])

  return (
    <Container>
      <section>
        <CompanyMultiSelect onGetCompany={setCnpj} companyError={errors.cnpj} />
        <CustomRangePicker
          label="Período: "
          value={period}
          setValue={setPeriod}
          // inputReadOnly={true}
          // hasError={errors.period}
          // msgError={errors.period}
        />
      </section>
      <CustomMultSelect
        label="Status:"
        value={status}
        setValue={setStatus}
        options={statusOptions}
        hasError={!!errors.status}
        messageError={errors.status}
      />
      <CustomMultSelect
        label="Colunas:"
        value={columns}
        setValue={setColumns}
        options={columnsOptions}
        hasError={!!errors.columns}
        messageError={errors.columns}
      />
    </Container>
  )
}
