import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { DataDependentI } from '../types/index'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { intervalToDuration, parse } from 'date-fns'

export const fromApi = (dataDependent: any): DataDependentI => {
  const holder = {
    id: dataDependent.idPaciente,
    name: formatFirstLastName(firstLetterCapitalize(dataDependent.nome)),
    cpf: formatCpf(dataDependent.cpf),
    plan: dataDependent.plano?.nome,
  }

  const dependents = dataDependent?.dependentes.map((dep: any) => {
    const birthDate = parse(dep.dataNascimento, 'dd/MM/yyyy', new Date())

    const { years } = intervalToDuration({
      start: birthDate,
      end: new Date(),
    })

    return {
      name: formatTextWithLimit(firstLetterCapitalize(dep.nome), 38),
      cpf: formatCpf(dep.cpf),
      id: dep.idPaciente,
      isAMinor: years ? years < 18 : false,
    }
  })
  return { holder, dependents }
}