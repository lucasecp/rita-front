import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'

export const fromApi = (dataDependent: any[]) => {
  return dataDependent?.map((dep) => ({
    name: formatTextWithLimit(dep.nome, 38),
    cpf: formatCpf(dep.cpf),
  }))
}
