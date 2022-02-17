interface OrderI {
  name?: string
  value?: string
}

export type StatusFromApi = 'I' | 'P' | 'A' | 'N'

export interface DataSpecialist {
  id: string
  name: string
  cpf: string
  issuingAgency: string
  registerNumber: string
  status: StatusFromApi
}

export interface SpecialistI {
  total: number
  data?: DataSpecialist[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  specialists: SpecialistI
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  specialists: SpecialistI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
