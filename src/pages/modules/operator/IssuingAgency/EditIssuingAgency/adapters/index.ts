import { DataToApiI } from '../types'

export const toApi = (dataToApi: any): DataToApiI => {
  return {
    idOrgaoEmissor: dataToApi.id,
    nomeEspecialista: dataToApi.specialistName,
    descricao: dataToApi.description,
    status: dataToApi.status,
  }
}
