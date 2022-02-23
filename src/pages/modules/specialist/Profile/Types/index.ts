import { MultiSelectOption } from '@/components/Form/MultSelect'

export interface SpecialistInfoI{
  name?: string
  profissionalName?: string
  cpf?: string
  receiveService?: string | number
  ufProfissionaRegister?: string
  classCouncil?: string
  email?: string
  phone?: string
}
export interface DataSpecialistI {
  specialistInfo?: SpecialistInfoI
  specialtys?: MultiSelectOption[]
  clinics?: MultiSelectOption[]
  crm?: string
}

export interface ErrorsI {
  name?: string
  profissionalName?: string
  cpf?: string
  receiveService?: string | number
  ufProfissionaRegister?: string
  classCouncil?: string
  email?: string
  phone?: string
  specialtys?: string
  clinics?: string
  crm?: string
  [x: string]: any
}
