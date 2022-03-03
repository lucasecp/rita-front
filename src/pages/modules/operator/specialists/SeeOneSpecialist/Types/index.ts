export interface ProfissionalDatasI {
  profissionalName?: string
  registerNumber?: string
  issuingAgency?: string
  uf?: string
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
}
