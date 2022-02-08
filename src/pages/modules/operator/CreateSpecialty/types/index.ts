export interface ErrorsI {
  code?: string
  description?: string
  requireSubscription?: string
}

export interface DataReceivedI {
  code?: string
  description?: string
  requireSubscription?: boolean
  [x: string]: any
}

export interface DataToApiI {
  codigo?: string
  descricao?: string
  requerInscricao?: boolean
}
