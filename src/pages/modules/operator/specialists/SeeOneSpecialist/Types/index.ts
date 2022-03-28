export interface ProfissionalDatasI {
  profissionalName?: string
  registerNumber?: string
  issuingAgency?: string
  uf?: string
  cashback?: string
  takerate?: string
}

export interface PersonalDatasI {
  name?: string
  cpf?: string
  phone?: string
  email?: string
}

export interface ErrorsI {
  profissionalName?: string
  registerNumber?: string
  issuingAgency?: string
  uf?: string
  name?: string
  cpf?: string
  phone?: string
  email?: string
  specialtys?: string
  clinics?: string
  cashBack?: string
  takeRate?: string
  [x: string]: any
}
