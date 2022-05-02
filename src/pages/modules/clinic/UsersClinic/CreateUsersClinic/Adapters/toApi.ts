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
