export interface PatientData {
  id: number
  name: string
  cpf: string
  birthDate: string
  gender: string
  phone: string
  email: string
}

export interface PatientDataHolder {
  plan?: string
  table?: string
  company?: string
}

export interface PatientAddress {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
  complement: string
}

export interface PatientValidation {
  documentOk: string
  resonDocumentNotOk: string
  incomeOk: string
  allDataVerified: boolean
}
