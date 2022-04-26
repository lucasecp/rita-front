import { AutocompleteOptions } from '@/components/Form/Autocomplete'

interface CityFromApi {
  idMunicipio: number
  descricao: string
  uf: {
    sigla: string
  }
}

export const citiesFromApi = (cities: CityFromApi[]): AutocompleteOptions[] => {
  return cities.map((city) => ({
    value: city.idMunicipio,
    label: `${city.descricao} - ${city.uf.sigla}`,
  }))
}
