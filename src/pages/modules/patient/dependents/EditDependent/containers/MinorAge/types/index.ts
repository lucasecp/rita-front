export interface PersonalDatas {
  name: string
  cpf: string
  gender: string
  birthdate: string
  phone: string
  email: string
  status: string
  income: string
}

export interface Address {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
  complement: string
}

export interface SituationType {
  plan: {
    name: string
    startDate: string
    endDate: string
  }
  table: string
}
