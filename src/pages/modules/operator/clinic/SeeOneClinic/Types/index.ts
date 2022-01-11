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

export interface ErrorsAddressI {
  nameAdmin?: string
  phone?: string
  email?: string
  cpf?: string
  cep?: string
}

export interface PersonalErrorsI {
  name?: string
  phone?: string
  socialReason?: string
  cnpj?: string
}
