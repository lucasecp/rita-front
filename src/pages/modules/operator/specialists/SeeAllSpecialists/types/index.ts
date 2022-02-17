interface OrderI {
  name?: string
  value?: string
}

export type StatusFromApi = 'I' | 'P' | 'A' | 'N'

export interface DataClinicI {
  id: string
  name: string
  cnpj: string
  status: StatusFromApi
}

export interface ClinicI {
  total: number
  data?: DataClinicI[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  clinics: ClinicI
  setClinics: (value: any) => void
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  clinics: ClinicI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
