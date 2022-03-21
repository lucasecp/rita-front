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
  idOrgaoEmissor: string
  nomeEspecialista: string
  descricao: string
  status: string
}
