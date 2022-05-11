import { MappedPlan, Plans } from '..'

export const fromApiPlans = (data: Plans[]): MappedPlan[] =>
  data.map((plan) => {
    return {
      idPlan: plan.idPlano,
      maximumDependentsQuantity: plan.maximoDependente,
      name: plan.nome,
      allowedMajorAge: plan.permiteMaiores,
      price: plan.preco,
    }
  })