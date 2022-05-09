export interface ValidationErrorFieldsI {
  typeAssistant: string,
  name: string,
  cpf: string
  email: boolean,
  phone: string
}

export interface DataToApiI {
  typeAssistant: string,
  name: string,
  cpf: string
  email: string,
  phone: string,
  phoneWithCaracters?: string
}
