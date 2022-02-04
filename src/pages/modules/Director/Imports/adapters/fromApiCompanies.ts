import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface ApiResponse {
  idEmpresa: number
  razaoSocial: string
}

export const fromApiCompanies = (
  data: ApiResponse[],
): AutocompleteOptions[] => {
  return data.map((item) => ({
    value: item.idEmpresa,
    label: item.razaoSocial,
  }))
}
