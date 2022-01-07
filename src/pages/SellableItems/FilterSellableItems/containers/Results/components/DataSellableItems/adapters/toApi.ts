import {
  OrderSellableItems,
  SellableItemsFilters,
  StatusSellableItems,
} from '../../../../../@types/index'

const statusToApi = (status: StatusSellableItems) => {
  const statusObject: { [x: string]: string } = {
    Inativo: 'I',
    'Em digitação': 'P',
    Ativo: 'A',
    Suspenso: 'S',
  }

  return statusObject[status]
}

const orderToApi = (order: OrderSellableItems) => {
  const orderColumns = {
    code: 'codigo',
    plan: 'nome',
    status: 'status',
    outlets: 'localVenda',
    amount: 'valor',
    actions: 'acoes',
  }

  const orderColumn = orderColumns[order?.name]

  const orderTypes = {
    ascending: 'ASC',
    descending: 'DESC',
  }

  let orderType = ''
  if (order?.value) {
    orderType = orderTypes[order?.value]
  }

  return { orderColumn, orderType }
}

export const sellableItemsToApi: any = (
  pagination: { limit: number; skip: number },
  order: OrderSellableItems,
  filters: SellableItemsFilters,
) => {
  const { orderColumn, orderType } = orderToApi(order)

  return {
    limit: pagination.limit,
    skip: pagination.skip,
    orderBy: orderColumn,
    order: orderType,
    codigo: filters.code,
    nome: filters.plan,
    status: filters.status?.map((status) => statusToApi(status.name)),
    idServico: filters.services?.map((service) => Number(service.id)),
    idRegional: filters.regionals?.map((regional) => regional.id),
    idUf: filters.ufs?.map((uf) => uf.id),
    idCidade: filters.cities?.map((city) => city.id),
  }
}
