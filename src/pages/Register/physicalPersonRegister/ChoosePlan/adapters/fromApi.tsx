import { MappedPlan } from '..'

export interface Plans {
  idPlano: number
  maximoDependente: number
  nome: string
  permiteMaiores: boolean
  preco: string
}

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
