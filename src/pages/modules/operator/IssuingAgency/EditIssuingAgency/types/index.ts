export interface ErrorsI {
  specialistName: string
  issuingAgency: string
  status: string
}

export interface DataReceivedI {
  specialistName: string
  issuingAgency: string
  status: string
  id?: string
  [x: string]: any
}

export interface DataToApiI {
  descricao: string
  nomeEspecialista: string
  status: string
}
