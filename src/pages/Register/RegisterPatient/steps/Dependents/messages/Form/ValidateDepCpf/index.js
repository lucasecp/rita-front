import clearCpf from '@/helpers/clear/SpecialCaracteres'
import cpfValidate from '@/helpers/validateCpf'
const anySpecialCaracter = /[^a-zA-Z0-9]/g

export const validateDepCpf = (value, allDeps, clientCpf,action) => {
  const newValue = value.replace(anySpecialCaracter, '')

  const alreadyExist = allDeps.some(
    (dep) => clearCpf(dep.cpf) === clearCpf(value) 
  )

  const isClientCpf =
    clearCpf(clientCpf) === clearCpf(value)

  if (!newValue.replace(anySpecialCaracter, ''))
    return { cpf: 'CPF Obrigatório.' }

  if (!cpfValidate(newValue.replace(anySpecialCaracter, '')))
    return { cpf: 'CPF Inválido.' }

  if (alreadyExist) return { cpf: 'CPF já incluído na lista.' }
  if(isClientCpf) return { cpf: 'Paciente não pode ser dependente.' }

  return { cpf: '' }
}
