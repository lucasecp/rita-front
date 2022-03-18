import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export const mapRegionalDataComingFromApi = (options) => {
  return options?.map((option) => {
    return { label: option.nome, index: option.id }
  })
}

export const mapUfsDataComingFromApi = (options) => {
  return options?.map((option) => {
    return { label: option.descricao, index: option.idUF }
  })
}

export const mapCitiesDataComingFromApi = (options) => {
  return options?.map((option) => {
    return { name: option.descricao, id: option.idMunicipio }
  })
}
