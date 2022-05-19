import { MultiSelectOption } from "@/components/Form/MultSelect"

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
  cnpj: string
  nameClinic: string
  socialReason: string
  phoneClinic: string
  emailClinic: string
  specialtys: MultiSelectOption[]
}

export interface TechnicianI {
  cpfTechnician: string
  nameTechnician: string
  phoneTechnician: string
  emailTechnician: string
}

export interface AdministratorI {
  cpfAdministrator: string
  nameAdministrator: string
  phoneAdministrator: string
  emailAdministrator: string
}

export interface ErrorsRegisterI {
  [x: string]: any
}

export interface RegisterClinicContextData {
  step: number
  previousStep: () => void
  nextStep: () => void
  registerClinic: () => Promise<void>
  photo: File | string
  address: AddressI
  basicInformation: BasicInformationI
  technician: TechnicianI
  administrator: AdministratorI
  stepAmount: number
  errors: ErrorsRegisterI
  setErrors: React.Dispatch<React.SetStateAction<ErrorsRegisterI>>
  setPhoto: React.Dispatch<React.SetStateAction<File | string>>
  setAddress: React.Dispatch<React.SetStateAction<AddressI>>
  setbasicInformation: React.Dispatch<React.SetStateAction<BasicInformationI>>
  setTechnician: React.Dispatch<React.SetStateAction<TechnicianI>>
  setAdministrator: React.Dispatch<React.SetStateAction<AdministratorI>>
}
