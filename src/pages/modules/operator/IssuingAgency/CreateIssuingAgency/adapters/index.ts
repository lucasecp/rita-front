import { DataToApiI } from '../types'

export const toApi = (dataToApi: any): DataToApiI => {
  return {
    descricao: dataToApi.issuingAgency,
    status: dataToApi.status,
    nomeEspecialista: dataToApi.specialist,
  }
}
