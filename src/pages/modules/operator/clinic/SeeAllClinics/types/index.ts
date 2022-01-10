interface OrderI {
  name?: string
  value?: string
}

interface ClinicI {
  total?: number
  data?: any[]
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
