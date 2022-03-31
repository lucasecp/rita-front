import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { statusOptions } from '../constants/statusOptions'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface PatientAnalyticFilters {
  cnpj: AutocompleteOptions
  registrationPeriod: string
  validationPeriod: string
  status: MultiSelectOption[]
}

interface PatientAnalyticFiltersToApi {
  idEmpresa: number
  limit: number
  dataCadastroInicio: string | undefined
  dataCadastroFim: string | undefined
  dataValidacaoInicio: string | undefined
  dataValidacaoFim: string | undefined
  status: (string | number)[]
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

export const previewFiltersToApi = (
  patientAnalyticFilters: PatientAnalyticFilters,
): PatientAnalyticFiltersToApi => {
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

  return {
    idEmpresa: patientAnalyticFilters.cnpj.value,
    limit: 10,
    dataCadastroInicio: registrationPeriodStartToApi,
    dataCadastroFim: registrationPeriodEndToApi,
    dataValidacaoInicio: validationPeriodStartToApi,
    dataValidacaoFim: validationPeriodEndToApi,
    status: statusToApiFiltered.map((status) => statusToApi(String(status.id))),
  }
}
