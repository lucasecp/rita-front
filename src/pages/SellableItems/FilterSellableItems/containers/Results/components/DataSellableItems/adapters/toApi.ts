import { SellableItemsFilters } from '../../../../../@types/index'

export const sellableItemsFiltersToApi: any = (
  order: {
    name: string
    value: string
  },
  filters: SellableItemsFilters,
) => {
  console.log(filters)
  console.log(order)

  return {
    limit: 10,
    skip: 0,
    orderBy: '',
    order: '',
    codigo: '',
    nome: '',
    status: [],
    idServico: [],
    idRegional: [],
    idUf: [],
    idCidade: [],
  }
}
