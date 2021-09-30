import clearCpf from '@/helpers/clear/SpecialCaracteres'
import cpfValidate from '@/helpers/validateCpf'

export const validateDepCpf = (value, allDeps, clientCpf) => {
  const alreadyExist = allDeps.some(
    (dep) => clearCpf(dep.cpf) === clearCpf(value)
  )
  const isClientCpf = clearCpf(clientCpf) === clearCpf(value)

  if (!clearCpf(value)) return { cpf: 'CPF Obrigatório.' }

  if (!cpfValidate(value)) return { cpf: 'CPF Inválido.' }

  if (alreadyExist)
    return {
      cpf: 'O CPF não pode ser igual ao de outro dependente, por favor verifique os dados e preencha novamente',
    }
  if (isClientCpf)
    return {
      cpf: 'O CPF deve ser diferente do CPF do Titular, por favor verifique os dados e preencha novamente',
    }

  return { cpf: '' }
}
