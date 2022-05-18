import { MultiSelectOption } from '@/components/Form/MultSelect/index'

export interface AddressI {
  cep: string
  number: string
  fullAddress: string
  complement: string
  district: string
  city: string
  uf: string
}

export interface BasicInformationI {
  profissionalRegister: string
  issuingAgency: string
  ufIssuingAgency: string
  issuingAgencyToApi: string
}

type SpecialtysAndDocsErrors = { [x: string]: string }

export interface ErrorsRegisterI {
  profissionalRegister: string
  issuingAgency: string
  ufIssuingAgency: string
  name: string
  profissionalName: string
  cpf: string
  receiveService: string
  email: boolean | string
  phone: string
  specialtys: MultiSelectOption[]
  clinics: MultiSelectOption[]
  specialtysAndDocs: SpecialtysAndDocsErrors
  [x: string]: any
}

export type SpecialtysAndDocsType = {
  [x: string]: {
    name: string
    idSpecialty: string
    document: Blob | string
  }
}

export interface RegisterClinicContextData {
  isActiveStep: (stepNumber: number) => boolean
  step: number
  previousStep: () => void
  nextStep: () => void
  registerSpecialist: () => Promise<void>
  photo: File | string
  address: AddressI
  basicInformation: BasicInformationI
  specialtysAndDocs: SpecialtysAndDocsType
  stepAmount: number
  errors: ErrorsRegisterI
  setErrors: React.Dispatch<React.SetStateAction<ErrorsRegisterI>>
  setPhoto: React.Dispatch<React.SetStateAction<File | string>>
  setAddress: React.Dispatch<React.SetStateAction<AddressI>>
  setbasicInformation: React.Dispatch<React.SetStateAction<BasicInformationI>>
  setSpecialtysAndDocs: React.Dispatch<React.SetStateAction<any>>
}
