import { DataToApiI } from '../types'

export const toApi = (dataToApi: any): DataToApiI => {
  return {
    nomeEspecialista: dataToApi.specialistName,
    descricao: dataToApi.issuingAgency,
    status: dataToApi.status,
  }
}
