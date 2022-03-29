import { DependentDataType, DependentAddressType } from '../../types'

export interface DependentToApiReturn {
  nome: string
  cpf: string
  sexo: string
  dataNascimento: string
  telefone: string
  email: string
  cep: string
  logradouro: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export interface ResponseCreateDependent extends DependentToApiReturn {
  idPaciente: number
}

export interface DependentCreatedFromApi
  extends DependentDataType,
    DependentAddressType {
  id: number
}
