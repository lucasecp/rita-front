import { DataReceivedI, DataToApiI } from '../types'

export const toApi = (dataToApi: DataReceivedI): DataToApiI => {
  return {
    codigo: dataToApi.code,
    descricao: dataToApi.description,
    requerInscricao: dataToApi.requireSubscription,
  }
}
