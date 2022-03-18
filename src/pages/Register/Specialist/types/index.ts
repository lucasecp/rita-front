import { MultiSelectOption } from '@/components/Form/MultSelect/index'

export interface ProfissionalInfoI {
  name: string
  profissionalName: string
  cpf: string
  receiveService: string
  email: string
  phone: string
  specialtys: MultiSelectOption[]
  clinics: MultiSelectOption[]
}

export interface BasicInformationI {
  profissionalRegister: string
  issuingAgency: string
  ufIssuingAgency: string
}

export interface ErrorsRegisterI {
  profissionalRegister?: string
  issuingAgency?: string
  ufIssuingAgency?: string
  name?: string
  profissionalName?: string
  cpf?: string
  receiveService?: string
  email?: boolean | string
  phone?: string
  specialtys?: MultiSelectOption[]
  clinics?: MultiSelectOption[]
  specialtysAndDocs?: string
  [x:string]: any
}

export interface RegisterSpecialistContextData {
  isActiveStep: (stepNumber: number) => boolean
  step: number
  previousStep: () => void
  nextStep: () => void
  resetData: () => void
  profissionalInfo: ProfissionalInfoI
  basicInformation: BasicInformationI
  specialtysAndDocs: any
  errors: ErrorsRegisterI
  setErrors: React.Dispatch<React.SetStateAction<ErrorsRegisterI>>
  setProfissionalInfo: React.Dispatch<React.SetStateAction<ProfissionalInfoI>>
  setbasicInformation: React.Dispatch<React.SetStateAction<BasicInformationI>>
  setSpecialtysAndDocs: React.Dispatch<React.SetStateAction<any>>
}
