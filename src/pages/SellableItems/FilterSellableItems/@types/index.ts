export interface SellableItemsFilters {
  code: string
  plan: string
  services: {
    id: number
    name: string
  }[]
  status: {
    id: number
    name: string
  }[]
  regional: {
    id: number
    name: string
  }[]
  uf: {
    id: number
    name: string
  }[]
  city: {
    id: number
    name: string
  }[]
}
