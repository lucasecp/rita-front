import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface Plans {
  idPlano: number
  codigo: string
  nome: string
}

export const plansFromApi = (plans: Plans[]): AutocompleteOptions[] => {
  return plans.map((plano) => {
    return {
      label: `${plano.codigo} - ${plano.nome}`,
      value: plano.idPlano,
    }
  })
}
