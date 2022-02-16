interface OrderI {
  name?: string
  value?: string
}

export interface DataSpecialtyI {
  id: string
  name: string
  code: string
  subscriptionRequired: string
}

export interface SpecialtyI {
  total: number
  data?: DataSpecialtyI[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  specialtys: SpecialtyI
  setSpecialtys: (value: any) => void
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  specialtys: SpecialtyI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
