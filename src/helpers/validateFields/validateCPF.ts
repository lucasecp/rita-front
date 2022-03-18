import validateCpf from '@/helpers/validateCpf'

export const validateCPF = (cpf: string): string => {
  if (!cpf.trim()) {
    return 'CPF Obrigatório.'
  }

  if (!validateCpf(cpf)) {
    return 'CPF inválido'
  }

  return ''
}
