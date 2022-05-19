/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataAllPendenciesCsd } from '../types'

export const fromApi = (data: any[]): DataAllPendenciesCsd[] => {
  return data.map((item) => ({
    numProtocolo: item?.id,
    typeAtendiment: item?.tipoAtendimento,
    atendent: item?.medico?.nome,
    patient: item?.paciente?.nome,
    data: item?.dataSolicitacao,
    status: item?.status,
  }))
}
