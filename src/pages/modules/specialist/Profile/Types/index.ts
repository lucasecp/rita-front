import { MultiSelectOption } from '@/components/Form/MultSelect'

export interface SpecialistInfoI {
  id?: number
  name?: string
  profissionalName?: string
  cpf?: string
  receiveService?: string
  ufProfissionaRegister?: string
  classCouncil?: string
  email?: string
  phone?: string
  photo?: string
  cashback?: string
  takerate?: string
}
export interface DataSpecialistI {
  specialistInfo?: SpecialistInfoI
  specialtys?: MultiSelectOption[]
  clinics?: MultiSelectOption[]
}

export interface ErrorsI {
  name?: string
  profissionalName?: string
  cpf?: string
  receiveService?: string
  ufProfissionaRegister?: string
  classCouncil?: string
  email?: string
  phone?: string
  specialtys?: string
  clinics?: string
  crm?: string
  specialtysAndDocsType?: string
  rqe?: string
  [x: string]: any
}

export type SpecialtysAndDocsType = {
  [x: string]: {
    idSpecialty: string | number
    document: string
  }
}

export type RqeAndSpecialtysType = {
  [x: string]: {
    idSpecialty: string | number
    rqe?: string
  }
}

export type SpecialtysType = { specialtys: MultiSelectOption[] }
export type ClinicErrorsType = { clinic: MultiSelectOption[] }
