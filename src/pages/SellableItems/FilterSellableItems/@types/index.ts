export interface SellableItemsFilters {
  code: string
  plan: string
  services: {
    id: number
    name: string
  }[]
  status: {
    id: number
    name: StatusSellableItems
  }[]
  regionals: {
    id: number
    name: string
  }[]
  ufs: {
    id: number
    name: string
  }[]
  cities: {
    id: number
    name: string
  }[]
}

export interface DataSellableItemsItem {
  id: 1
  code: string
  plan: {
    id: number
    name: string
  }
  status: StatusSellableItems
  outlets: string
  amount: string
}

export interface OrderSellableItems {
  name: 'code' | 'plan' | 'status' | 'outlets' | 'amount' | 'actions'
  value: 'ascending' | 'descending' | undefined
}

export type StatusSellableItems =
  | 'Ativo'
  | 'Inativo'
  | 'Em digitação'
  | 'Suspenso'

