
interface OrderI {
  name?: string
  value?: string
}

export interface DataAllPendenciesCsd {
  numProtocolo: number
  typeAtendiment: string
  atendent: string
  patient: string
  data: string,
  status: string
}

export interface PendenciesCsdI {
  total: number
  data?: DataAllPendenciesCsd[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  data: PendenciesCsdI
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  dataCSD: PendenciesCsdI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}

export interface ErrorI {
  atendent?: string
  patient?: string
  protocolNumber?: string
  status?: string
}
