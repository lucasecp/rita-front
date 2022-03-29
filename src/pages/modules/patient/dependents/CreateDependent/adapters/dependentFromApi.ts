import { ResponseCreateDependent, DependentCreatedFromApi } from './types'

export const dependentFromApi = (
  dependentCreated: ResponseCreateDependent,
): DependentCreatedFromApi => {
  const {
    idPaciente,
    nome,
    cpf,
    sexo,
    dataNascimento,
    email,
    telefone,
    cep,
    uf,
    cidade,
    logradouro,
    numero,
    bairro,
    complemento,
  } = dependentCreated

  return {
    id: idPaciente,

    name: nome,
    cpf,
    gender: sexo,
    birthDate: dataNascimento,
    email,
    phone: telefone,

    cep,
    uf,
    city: cidade,
    address: logradouro,
    number: numero,
    district: bairro,
    complement: complemento,
  }
}
