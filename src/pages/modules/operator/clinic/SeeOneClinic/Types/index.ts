
export interface AcessDatasI {
  nameAdmin: string
  cpf: string
  phone: string
  email: string
}

export interface DataI {
  name?: string
  socialReason?: string
  cnpj?: string
  phone?: string
  status?: string
}

export interface AddressI {
  cep?: string
  uf?: string
  city?: string
  address?: string
  number?: string
  district?: string
  complement?: string
}

export interface ErrorsI {
  nameAdmin?: string
  celPhone?: string
  email?: string
  cpf?: string
  cep?: string
  city?: string
  address?: string
  number?: string
  district?: string
  name?: string
  phone?: string
  socialReason?: string
  cnpj?: string
  status?: string
  specialtys?: ''
  uf?: string
  [x: string]: any
}
