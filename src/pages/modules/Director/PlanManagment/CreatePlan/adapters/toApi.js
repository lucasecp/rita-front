import { mapRangesToSendApi } from '../helpers/mapRangesToSendApi'

export const toApi = (data) => {
  const { code, name, description, services, rangesOfUse } = data

  const mappedRangesOfUse = mapRangesToSendApi(rangesOfUse)
  const mappedServices = services.map((service) => service.id)

  return {
    codigo: code,
    nome: name,
    descricao: description,
    associarServico: mappedServices,
    abrangencia: mappedRangesOfUse,
  }
}
