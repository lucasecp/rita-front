import { MultiSelectOption } from '@/components/Form/MultSelect'
import { formatMultSelectArray } from './formatMultSelectArray'

const order = [
  'cadastro',
  'nome',
  'cpf',
  'status',
  'validador',
  'validacao',
  'dadosValidados',
  'renda',
  'motivoNegativa',
  'email',
]

export default (value: MultiSelectOption[]): string[] => {
  const newValue = formatMultSelectArray(value)

  return order.reduce((acumulator: string[], el: string) => {
    if (newValue.includes(el)) {
      acumulator.push(el)
    }
    return acumulator
  }, [])
}
