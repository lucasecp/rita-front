import clearSpecialCharacter from '@/helpers/clearSpecialCharacters'

export const validateCep = (cep: string): string => {
  const cepCleared = clearSpecialCharacter(cep)

  if (cepCleared.length > 0 && cepCleared.length < 8) {
    return 'Cep Inválido'
  }

  return ''
}
