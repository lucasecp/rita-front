import formatMultSelectArray from './formatMultSelectArray'

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
]

export default (value) => {
  const newValue = formatMultSelectArray(value)

  return order.reduce((acumulator, el) => {
    if (newValue.includes(el)) {
      acumulator.push(el)
    }
    return acumulator
  }, [])
}
