import { optionsFilteredWithAll } from '@/components/Form/MultSelect/helpers/OptionsFilteredWithAll'
import { statusOptions } from '../constants/statusOptions'
import { columnsOptions } from '../constants/columnsOptions'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface BillingsFilters {
  cnpj: AutocompleteOptions
  registrationPeriod: string
  validationPeriod: string
  status: MultiSelectOption[]
  columns: MultiSelectOption[]
}

interface BillingsFiltersToApi {
  idEmpresa: number
  limit: number
  dataCadastroInicio: string | undefined
  dataCadastroFim: string | undefined
  dataValidacaoInicio: string | undefined
  dataValidacaoFim: string | undefined
  // status: (string | number)[]
  // colunas: (string | number)[]
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
    contractNumber: 'titulares.cpf',
    beneficiaryType: 'beneficiario',
    name: 'paciente.nome',
    cpf: 'paciente.cpf',
    birthDate: 'paciente.dataNascimento',
    gender: 'paciente.sexo',
    plan: 'plano.nome',
    amountPlan: 'plano.mensalidade',
    phone: 'paciente.telefone',
    status: 'paciente.status',
  }

  return columnsObject[columns] || ''
}

export const previewFiltersToApi = (
  billingsFilters: BillingsFilters,
): BillingsFiltersToApi => {
  const registrationPeriodStartToApi = billingsFilters.registrationPeriod[0]
    ? new Date(billingsFilters.registrationPeriod[0]).toISOString()
    : undefined

  const registrationPeriodEndToApi = billingsFilters.registrationPeriod[1]
    ? new Date(billingsFilters.registrationPeriod[1]).toISOString()
    : undefined

  const validationPeriodStartToApi = billingsFilters.validationPeriod[0]
    ? new Date(billingsFilters.validationPeriod[0]).toISOString()
    : undefined

  const validationPeriodEndToApi = billingsFilters.validationPeriod[1]
    ? new Date(billingsFilters.validationPeriod[1]).toISOString()
    : undefined

  // const statusToApiFiltered = optionsFilteredWithAll(
  //   billingsFilters.status,
  //   statusOptions,
  // )

  // const columnsToApiFiltered = optionsFilteredWithAll(
  //   billingsFilters.columns,
  //   columnsOptions,
  // )

  return {
    idEmpresa: billingsFilters.cnpj.value,
    limit: 10,
    dataCadastroInicio: registrationPeriodStartToApi,
    dataCadastroFim: registrationPeriodEndToApi,
    dataValidacaoInicio: validationPeriodStartToApi,
    dataValidacaoFim: validationPeriodEndToApi,
    // status: statusToApiFiltered.map((status) => statusToApi(String(status.id))),
    // colunas: columnsToApiFiltered.map((column) =>
    //   columnsToApi(String(column.id)),
    // ),
  }
}
