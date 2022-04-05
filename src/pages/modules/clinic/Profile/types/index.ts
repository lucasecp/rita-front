import { MultiSelectOption } from "@/components/Form/MultSelect"

export interface ClinicProfileI {
  avatar?: string,
  district: string,
  cep: string,
  cnpj: string,
  complement: string,
  cpfResponsible: string,
  description: string,
  email: string,
  emailResponsible: string,
  address: string,
  addressValided: string,
  specialty: MultiSelectOption[],
  allSpecialtys: MultiSelectOption[],
  photo?: File | string | null,
  idClinic: number,
  latitude: string | number,
  longitude: string | number,
  number: string,
  razaoSocial: string,
  responsible: string,
  status: string,
  phone: string,
  phoneResponsible: string,
  uf: string,
  city: string,
}

export interface DataClinicI {
  description: string,
  razaoSocial: string,
  cnpj: string,
  status: string,
  phone: string
}

export interface ResponsibleTecnicI {
  responsibleTecnic: string,
  cpfResponsibleTecnic: string,
  phoneResponsibleTecnic: string,
  emailTecnic: string
}

export interface ResponsibleAdministrativeI {
  responsibleAdministrative: string,
  cpfResponsibleAdministrative: string,
  phoneResponsibleAdministrative: string,
  emailAdministrative: string
}

export interface AddressClinicI {
  cep: string,
  uf: string,
  city: string,
  address: string
  number: string
  district: string
  complement: string
}

export interface ErrorsI {
  avatar?: string,
  district?: string,
  cep?: string,
  cnpj?: string,
  complement?: string,
  description?: string,
  email?: string,
  address?: string,
  addressValided?: string,
  specialty?: string,
  allSpecialtys?: string,
  photo?: string,
  idClinic?: string,
  latitude?: string,
  longitude?: string,
  number?: string,
  razaoSocial?: string,
  status?: string,
  phone?: string,
  responsibleAdministrative: string,
  cpfResponsibleAdministrative: string,
  phoneResponsibleAdministrative: string,
  emailResponsibleAdministrative: string
  responsibleTecnic: string,
  cpfResponsibleTecnic: string,
  phoneResponsibleTecnic: string,
  emailResponsibleTecnic: string
  uf?: string,
  city?: string,
  [x: string]: any
}




