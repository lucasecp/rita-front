import validateCpf from '@/helpers/validateCpf'

export const validateCPF = (cpf: string, alreadyExist = false): string => {
  if (!cpf.trim()) {
    return 'CPF Obrigatório.'
  }

  if (!validateCpf(cpf)) {
    return 'CPF inválido'
  }

  if (alreadyExist) {
    return 'Este CPF já está cadastrado na plataforma Rita, por favor verifique os dados e preencha novamente'
  }

  return ''
}
