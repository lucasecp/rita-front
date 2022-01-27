import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { DataDependentI } from '../types/index'

export const fromApi = (dataDependent: any): DataDependentI => {
  const holder = {
    id: dataDependent.idPaciente,
    name: formatTextWithLimit(dataDependent.nome, 38),
    cpf: formatCpf(dataDependent.cpf),
    plan: dataDependent.plano?.nome,
  }

  const dependents = dataDependent?.dependentes.map((dep: any) => ({
    name: formatTextWithLimit(dep.nome, 38),
    cpf: formatCpf(dep.cpf),
  }))
  return { holder, dependents }
}
