import clearCpf from '@/helpers/clearSpecialCharacters'
import cpfValidate from '@/helpers/validateCpf'

import { DependentData } from '../../types'

export const validateDepCpf = (
  value: string,
  allDeps: DependentData[],
  holderCpf: string,
): string => {
  const alreadyExist = allDeps.some(
    (dep) => clearCpf(dep.cpf) === clearCpf(value),
  )
  const isHolderCpf = clearCpf(holderCpf) === clearCpf(value)

  if (!clearCpf(value)) return 'CPF Obrigatório.'

  if (!cpfValidate(value)) return 'CPF Inválido.'

  if (alreadyExist) {
    return 'O CPF não pode ser igual ao de outro dependente, por favor verifique os dados e preencha novamente'
  }

  if (isHolderCpf) {
    return 'O CPF deve ser diferente do CPF do Titular, por favor verifique os dados e preencha novamente'
  }

  return ''
}
