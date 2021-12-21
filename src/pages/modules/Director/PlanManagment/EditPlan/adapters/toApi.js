import { mapRangesToSendApi } from '../helpers/mapRangesToSendApi'

export const planToApi = (plan) => {
  return {
    idPlano: plan.id,
    codigo: plan.code,
    nome: plan.name,
    status: plan.status,
    descricao: plan.description,
    abrangencia: mapRangesToSendApi(plan.rangesOfUse),
    servicos: plan.services.map((service) => service.id),
  }
}
