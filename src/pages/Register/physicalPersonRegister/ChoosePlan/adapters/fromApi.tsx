import formatPrice from '@/helpers/formatPrice'
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
    const staticPeriodicity = 'anual'

    return {
      idPlan: plan.idPlano,
      maximumDependentsQuantity: plan.maximoDependente,
      name: plan.nome,
      allowedMajorAge: plan.permiteMaiores,
      price:
        !plan.preco ||
        plan.preco === '0.00' ||
        plan.preco === '0,00' ||
        plan.preco === '0'
          ? 'Isento'
          : formatPrice(plan.preco),
      periodicity: staticPeriodicity === 'anual' ? 'ano' : 'mês',
    }
  })
