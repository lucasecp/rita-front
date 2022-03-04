import { OrderUsers, UsersFilters } from '../../../../../@types'

const orderToApi = (order: OrderUsers) => {
  const orderColumns = {
    name: 'nome',
    login: 'usuario',
    status: 'situacao',
  }

  const orderColumn = orderColumns[order?.name]

  const orderTypes = {
    ascending: 'ASC',
    descending: 'DESC',
  }

  let orderType
  if (order?.value) {
    orderType = orderTypes[order?.value]
  }

  return { orderColumn, orderType }
}

export const paramsToApiGetUsers = (
  pagination: {
    limit: number
    skip: number
  },
  order: OrderUsers,
  filters: UsersFilters,
): any => {
  const { orderColumn, orderType } = orderToApi(order)

  return {
    limit: pagination.limit,
    skip: pagination.skip,
    orderBy: orderColumn,
    order: orderType,
    nome: filters.name,
    usuario: filters.login,
    situacao: filters.status?.map((status) => status.id),
    perfis: filters.profiles?.map((profile) => profile.id),
  }
}
