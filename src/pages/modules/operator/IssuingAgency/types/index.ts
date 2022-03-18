interface OrderI {
  name?: string
  value?: string
}

// export interface DataSpecialtyI {
//   id?: number
//   type?: string
//   code?: string
//   count?: number
// }

export interface IssuingAgencyI {
  id?: number
  issuingAgency?: string
  specialist?: string
  status?: string
  countSpecialist: number
  countSpecialty: number
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  issuingAgency: IssuingAgencyI[]
  setIssuingAgency: (value: any) => void
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  issuingAgency: IssuingAgencyI[]
  setIssuingAgency: (value: any) => void
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
