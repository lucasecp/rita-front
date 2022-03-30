import React, { useEffect, useState } from 'react'
import QueryString from 'qs'

import CustomRangePicker from '@/components/Form/CustomRangePicker'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import CompanyMultiSelect from './components/CompanyMultiSelect'
import { toast } from '@/styles/components/toastify'
import { LengthyReport } from './messages/LengthyReport'

import { Container } from './styles'

import { statusOptions } from './constants/statusOptions'
import { columnsOptions } from './constants/columnsOptions'

import {
  GenerateReportState,
  PdfHasBeenDisabledByState,
  PreviewBillingsState,
} from '../..'

import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import downloadFile from '@/helpers/downloadFile'

import { previewBillingsFromApi } from './adapters/fromApi'
import { previewFiltersToApi } from './adapters/previewFiltersToApi'
import { reportFiltersToApi } from './adapters/reportFiltersToApi'

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
  const initialStatus = [{ id: 'all', name: 'Todos' }]
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
    onGetReportCanBeGenerated(false)
  }, [cnpj, period, status, columns])

  useEffect(() => {
    if (generatePreview) {
      const loadPreview = async () => {
        if (hasErrors()) {
          onGetReportCanBeGenerated(false)
          return
        }

        const filtersMapped = previewFiltersToApi({
          cnpj,
          period,
          status,
          columns,
        })

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

  const generateBillingReport = async () => {
    const filtersReportMapped = reportFiltersToApi({
      cnpj,
      period,
      status,
      columns,
      fileTypeReport: generateReport.fileTypeReport,
    })

    try {
      const response = await toast.promise(
        apiPatient.get('/relatorio/faturamento', {
          responseType: 'arraybuffer',
          params: filtersReportMapped,
          paramsSerializer: (params) => {
            return QueryString.stringify(params, { arrayFormat: 'repeat' })
          },
        }),
        {
          pending: 'Gerando arquivo...',
          success: 'Relatório Emitido com sucesso',
          error: 'Erro ao gerar relatório',
        },
      )

      if (response.status === 200) {
        if (generateReport.fileTypeReport === 'xlsx') {
          const blobReportXlsx = new Blob([response.data], {
            type: 'application/vnd.ms-excel;charset=utf-8',
          })

          downloadFile(blobReportXlsx, '_Faturamento', 'xls')
        }

        if (generateReport.fileTypeReport === 'pdf') {
          const blobReportPdf = new Blob([response.data], {
            type: 'application/pdf',
          })
          downloadFile(blobReportPdf, '_Faturamento', 'pdf')
        }
      }
    } catch (error) {
      // console.log(error)
    }
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
