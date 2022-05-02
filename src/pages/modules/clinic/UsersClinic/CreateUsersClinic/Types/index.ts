export interface ValidationErrorFieldsI {
   hasError: boolean,
   msgError: string,
   field: string
}

export interface DataToApiI {
  typeAssistant: string,
  name: string,
  cpf: string
  email: string,
  phone: string
}
