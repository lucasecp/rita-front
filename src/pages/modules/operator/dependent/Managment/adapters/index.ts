import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { DataDependentI } from '../types/index'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import formatFirstLastName from '@/helpers/formatFirstLastName'

export const fromApi = (dataDependent: any): DataDependentI => {
  const holder = {
    id: dataDependent.idPaciente,
    name: formatFirstLastName(firstLetterCapitalize(dataDependent.nome)),
    cpf: formatCpf(dataDependent.cpf),
    plan: dataDependent.plano?.nome,
  }

  const dependents = dataDependent?.dependentes.map((dep: any) => ({
    name: formatTextWithLimit(firstLetterCapitalize(dep.nome), 38),
    cpf: formatCpf(dep.cpf),
    id: dep.idPaciente,
    isAMinor:
      new Date().getFullYear() - new Date(dep.dataNascimento).getFullYear() <
      18,
  }))
  return { holder, dependents }
}
