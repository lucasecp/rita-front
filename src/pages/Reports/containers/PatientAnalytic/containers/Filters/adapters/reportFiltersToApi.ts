import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { statusOptions } from '../constants/statusOptions'
import { columnsOptions } from '../constants/columnsOptions'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface PatientAnalyticFilters {
  cnpj: AutocompleteOptions
  registrationPeriod: string
  validationPeriod: string
  status: MultiSelectOption[]
  columns: MultiSelectOption[]
  fileTypeReport: string
}

interface ReportFiltersToApi {
  idEmpresa: number
  dataInicio: string | undefined
  dataFim: string | undefined
  dataValidacaoInicio: string | undefined
  dataValidacaoFim: string | undefined
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
    beneficiaryType: 'tipoBeneficiario',
    contractNumber: 'nContrato',
    name: 'nome',
    cpf: 'cpf',
    birthDate: 'nascimento',
    email: 'email',
    gender: 'sexo',
    plan: 'plano',
    table: 'tabela',
    phone: 'telefone',
    address: 'logradouro',
    number: 'numero',
    complement: 'complemento',
    district: 'bairro',
    city: 'cidade',
    uf: 'uf',
    cep: 'cep',
    status: 'status',
    registerDate: 'cadastro',
    exclusionDate: 'exclusao',
    validationDate: 'validacao',
  }

  return columnsObject[columns] || ''
}

export const reportFiltersToApi = (
  patientAnalyticFilters: PatientAnalyticFilters,
): ReportFiltersToApi => {
  const registrationPeriodStartToApi = patientAnalyticFilters
    .registrationPeriod[0]
    ? new Date(patientAnalyticFilters.registrationPeriod[0]).toISOString()
    : undefined

  const registrationPeriodEndToApi = patientAnalyticFilters
    .registrationPeriod[1]
    ? new Date(patientAnalyticFilters.registrationPeriod[1]).toISOString()
    : undefined

  const validationPeriodStartToApi = patientAnalyticFilters.validationPeriod[0]
    ? new Date(patientAnalyticFilters.validationPeriod[0]).toISOString()
    : undefined

  const validationPeriodEndToApi = patientAnalyticFilters.validationPeriod[1]
    ? new Date(patientAnalyticFilters.validationPeriod[1]).toISOString()
    : undefined

  const statusToApiFiltered = optionsFilteredWithAll(
    patientAnalyticFilters.status,
    statusOptions,
  )

  const columnsToApiFiltered = optionsFilteredWithAll(
    patientAnalyticFilters.columns,
    columnsOptions,
  )

  return {
    idEmpresa: patientAnalyticFilters.cnpj.value,
    dataInicio: registrationPeriodStartToApi,
    dataFim: registrationPeriodEndToApi,
    dataValidacaoInicio: validationPeriodStartToApi,
    dataValidacaoFim: validationPeriodEndToApi,
    status: statusToApiFiltered.map((status) => statusToApi(String(status.id))),
    campos: columnsToApiFiltered.map((column) =>
      columnsToApi(String(column.id)),
    ),
    tipoRelatorio: patientAnalyticFilters.fileTypeReport,
  }
}
