import { DataToApiI } from '../types'

export const toApi = (dataToApi: any): DataToApiI => {
  return {
    idEspecialidade: dataToApi.id,
    codigo: dataToApi.code,
    descricao: dataToApi.description,
    requerInscricao: dataToApi.requireSubscription,
    idOrgaoEmissor: Number (dataToApi.issuingAgency),
  }
}
