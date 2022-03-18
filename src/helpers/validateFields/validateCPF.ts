import clearSpecialCaracter from '../clear/SpecialCaracteres'
import validateCpf from '../validateCpf'

export const validateCPF = (value: string): string => {
  const newValue = clearSpecialCaracter(value)
  
  if (!newValue) return 'CPF Obrigatório.'

  else if (!validateCpf(newValue)) return 'CPF Inválido.'

  return ''
}
