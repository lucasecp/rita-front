import { DataToApiI } from '../types'

export const toApi = (dataToApi: any): DataToApiI => {
  return {
    codigo: dataToApi.code,
    descricao: dataToApi.description,
    requerInscricao: dataToApi.requireSubscription,
  }
}
