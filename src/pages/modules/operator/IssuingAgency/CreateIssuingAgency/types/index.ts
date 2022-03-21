export interface ErrorsI {
  issuingAgency?: string
  specialist?: string
  status?: string
}

export interface DataReceivedI {
  issuingAgency?: string
  specialist?: string
  status?: boolean | string | number
  [x: string]: any
}

export interface DataToApiI {
  descricao?: string
  nomeEspecialista?: string
  status?: string
}
