export interface ErrorsI {
  code?: string
  description?: string
  requireSubscription?: string
}

export interface DataReceivedI {
  code?: string
  description?: string
  requireSubscription?: boolean | string | number
  id?: string
  [x: string]: any
}

export interface DataToApiI {
  idEspecialidade?: string
  codigo?: string
  descricao?: string
  requerInscricao?: boolean
}
