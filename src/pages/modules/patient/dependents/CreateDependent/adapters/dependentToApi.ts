import { DependentDataType, DependentAddressType } from '../types/index'
import { DependentToApiReturn } from './types'

export const dependentToApi = (
  dependentData: DependentDataType,
  dependentAddress: DependentAddressType,
): DependentToApiReturn => {
  const { name, cpf, gender, birthDate, email, phone } = dependentData
  const { cep, uf, city, address, number, district, complement } =
    dependentAddress

  return {
    nome: name,
    cpf: cpf,
    sexo: gender,
    dataNascimento: birthDate,
    telefone: phone,
    email: email,
    cep: cep,
    logradouro: address,
    numero: number,
    complemento: complement,
    bairro: district,
    cidade: city,
    uf: String(uf),
  }
}
