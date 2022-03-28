import { PlaceOfSale } from './../components/PlaceOfSale/index'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

interface PlaceOfSaleFromApi {
  uf: {
    id: number
    sigla: string
    nome: string
  }
  regional: {
    id: number
    nome: string
  }
  municipios: {
    id: number
    nome: string
  }[]
}

export const placeOfSaleFromApi = (
  placesOfSales: PlaceOfSaleFromApi[],
): PlaceOfSale[] => {
  return placesOfSales?.map((placeOfSale) => ({
    regional: placeOfSale.regional && {
      label: placeOfSale.regional?.nome,
      id: placeOfSale.regional?.id,
    },
    uf: placeOfSale.uf && {
      label: firstLetterCapitalize(placeOfSale.uf?.nome),
      id: placeOfSale.uf?.id,
    },
    cities: placeOfSale.municipios
      ? placeOfSale.municipios?.map((city) => ({
          name: city.nome,
          id: city.id,
        }))
      : [],
    showCities: false,
  }))
}
