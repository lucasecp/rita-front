import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import { PlaceOfSale } from './../components/PlaceOfSale'
import { MultiSelectOption } from '@/components/Form/MultSelect'

interface StructureToApi {
  id: number
  nome: string
}

interface PlaceOfSaleToApi {
  regional: StructureToApi | string
  uf: StructureToApi | string
  municipios: {
    id: number | string
    nome: string
  }[]
}

interface OnePlaceOfSaleToApi {
  regional: number
  idPlano: number
  uf: number
  municipios: string[]
  locaisVenda: PlaceOfSaleToApi[]
}
interface SellableItem {
  plan: AutocompleteOptions
  price: string
  placeOfSale: PlaceOfSale[]
}

interface SellableItemToApi {
  idPlano: number
  preco: string
  locaisVenda: PlaceOfSaleToApi[]
}

export const placeOfSaleToApi = (
  placesOfSale: PlaceOfSale[],
): PlaceOfSaleToApi[] => {
  const placesOfSaleMapped = placesOfSale?.map((placeOfSale) => ({
    regional: placeOfSale.regional
      ? { id: placeOfSale.regional.id, nome: placeOfSale.regional.label }
      : '',
    uf: placeOfSale.uf
      ? { id: placeOfSale.uf.id, nome: placeOfSale.uf.label }
      : '',
    municipios: placeOfSale?.cities?.map((city) => ({
      id: city.id,
      nome: city.name,
    })),
  }))

  return placesOfSaleMapped
}

export const onePlaceOfSaleToApi = (
  idPlan: number,
  regional: string | number,
  uf: string | number,
  cities: MultiSelectOption[],
  placeOfSale: PlaceOfSale[],
): OnePlaceOfSaleToApi => {
  return {
    regional: Number(regional),
    idPlano: idPlan,
    uf: Number(uf),
    municipios: cities.map((city) => `${city.id}`),
    locaisVenda: placeOfSaleToApi(placeOfSale),
  }
}

export const sellableItemToApi = ({
  plan,
  price,
  placeOfSale,
}: SellableItem): SellableItemToApi => {
  return {
    idPlano: plan.value,
    preco: `${price.slice(0, price.length - 2)},${price.slice(-2)}`,
    locaisVenda: placeOfSaleToApi(placeOfSale),
  }
}
