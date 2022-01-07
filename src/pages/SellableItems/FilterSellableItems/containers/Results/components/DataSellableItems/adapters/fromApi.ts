import { formatPrice } from '@/helpers/formatPrice'

export const statusFromApi: any = (status: any) => {
  const statusObject: { [x: string]: string } = {
    I: 'Inativo',
    P: 'Em digitação',
    A: 'Ativo',
    S: 'Suspenso',
  }

  return statusObject[status]
}
;('municipio')

export const sellableItemsFromApi: any = (sellableItemsResponse: any) => {
  // const {  } = sellableItemsResponse

  return sellableItemsResponse?.map((item: any) => ({
    id: item.id,
    code: item.codigo,
    plan: {
      id: item.idPlano,
      name: item.nome,
    },
    status: statusFromApi(item.status),
    outlets: item.localVenda,
    amount: formatPrice(item.valor),
    type: item.tipo === 'municipio' ? 'city' : item.tipo,
  }))
}
