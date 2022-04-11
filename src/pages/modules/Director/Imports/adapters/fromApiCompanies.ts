import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import formatCnpj from '@/helpers/formatCnpj'

interface ApiResponse {
  empresas: {
    idEmpresa: number
    cnpj: string
    razaoSocial: string
  }[]
}

export const fromApiCompanies = (data: ApiResponse): AutocompleteOptions[] => {
  const companies = data.empresas?.map((item) => {
    const formatLabel = `${formatCnpj(item.cnpj)} - ${item.razaoSocial}`

    return {
      value: item.idEmpresa,
      label: formatLabel,
    }
  })

  return companies
}
