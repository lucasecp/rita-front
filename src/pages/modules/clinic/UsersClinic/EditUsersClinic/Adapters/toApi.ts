/** Types */
import { DataToApiI } from '../Types'

export const toApi = (dataToApi: DataToApiI) => {
  return {
    tipoAssistente: dataToApi.typeAssistant,
    nome: dataToApi.name,
    cpf: dataToApi.cpf,
    email: dataToApi.email,
    celular: dataToApi.phone
  }
}

export const toApiEdit = (dataToApi: DataToApiI) => {
  return {
    perfil: { nome: dataToApi.typeAssistant },
    nome: dataToApi.name,
    email: dataToApi.email,
    celular: dataToApi.phone
  }
}
