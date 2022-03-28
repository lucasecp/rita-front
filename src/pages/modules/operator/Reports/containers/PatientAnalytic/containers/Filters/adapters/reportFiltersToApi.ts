import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { statusOptions } from '../constants/statusOptions'
import { columnsOptions } from '../constants/columnsOptions'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface BillingsFilters {
  cnpj: AutocompleteOptions
  period: string
  status: MultiSelectOption[]
  columns: MultiSelectOption[]
  fileTypeReport: string
}

interface BillingsFiltersToApi {
  idEmpresa: number
  dataInicio: string | undefined
  dataFim: string | undefined
  status: (string | number)[]
  campos: (string | number)[]
  tipoRelatorio: string
}

export const statusToApi = (status: string): string => {
  const statusObject: { [x: string]: string } = {
    active: 'A',
    inactive: 'I',
    preRegister: 'E',
    pending: 'P',
    denied: 'N',
    blocked: 'NN',
  }

  return statusObject[status] || ''
}

export const columnsToApi = (columns: string): string => {
  const columnsObject: { [x: string]: string } = {
    id: 'id',
    contractNumber: 'nContrato',
    beneficiaryType: 'tipoBeneficiario',
    name: 'nome',
    cpf: 'cpf',
    birthDate: 'nascimento',
    gender: 'sexo',
    plan: 'plano',
    amountPlan: 'valorPlano',
    phone: 'telefone',
    status: 'status',
  }

  return columnsObject[columns] || ''
}

export const reportFiltersToApi = (
  billingsFilters: BillingsFilters,
): BillingsFiltersToApi => {
  const periodStartToApi = billingsFilters.period[0]
    ? new Date(billingsFilters.period[0]).toISOString()
    : undefined

  const periodEndToApi = billingsFilters.period[1]
    ? new Date(billingsFilters.period[1]).toISOString()
    : undefined

  const statusToApiFiltered = optionsFilteredWithAll(
    billingsFilters.status,
    statusOptions,
  )

  const columnsToApiFiltered = optionsFilteredWithAll(
    billingsFilters.columns,
    columnsOptions,
  )

  return {
    idEmpresa: billingsFilters.cnpj.value,
    dataInicio: periodStartToApi,
    dataFim: periodEndToApi,
    status: statusToApiFiltered.map((status) => statusToApi(String(status.id))),
    campos: columnsToApiFiltered.map((column) =>
      columnsToApi(String(column.id)),
    ),
    tipoRelatorio: billingsFilters.fileTypeReport,
  }
}
