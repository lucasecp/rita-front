import { formatCpf } from '@/helpers/formatCpf'
import { DependentI } from '../types/index'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import formatFirstLastName from '@/helpers/formatFirstLastName'

const showStatus = (status: 'I' | 'P' | 'N' | 'D' | 'A') => {
  const formatedStatus = {
    I: 'Inativo',
    P: 'Pendente',
    N: 'Negado',
    D: 'Dependente',
    A: 'Aprovado'
  }
  return formatedStatus[status] || ''
}

export const fromApi = (dataDependent: any): DependentI => {
  return {
    id: dataDependent.idPaciente,
    name: formatFirstLastName(firstLetterCapitalize(dataDependent.nome)),
    cpf: formatCpf(dataDependent.cpf),
    isAHolder: !!dataDependent?.dependentes?.length,
    status: showStatus(dataDependent?.status),
    holder: {
      name: dataDependent?.titular?.nome,
      cpf: dataDependent?.titular?.cpf,
    },
  }
}


