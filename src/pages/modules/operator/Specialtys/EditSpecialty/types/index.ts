export interface ErrorsI {
  code?: string
  description?: string
  requireSubscription?: string
  issuingAgency: string
}

export interface DataReceivedI {
  code?: string
  description?: string
  requireSubscription?: string
  id?: string
  [x: string]: any
  issuingAgency: string
}

export interface DataToApiI {
  idEspecialidade?: string
  codigo?: string
  descricao?: string
  requerInscricao?: boolean
  idOrgaoEmissor: number
}
