import { DependentsI } from './../types/index'
import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'

interface FromApi {
  companyMapped: string
  dependentsMapped: DependentsI[]
}

interface FromApiResponse {
  empresa: string
  dependentes: {
    idPaciente: number
    nome: string
    dataNascimento: string
    cpf: string
    status: string
    validacaoUltrapassada: boolean
    cpfCadastrado: boolean
  }[]
}

export const fromApi = (data: FromApiResponse): FromApi => {
  const dependentsMapped = data.dependentes?.map((dependent) => ({
    id: dependent.idPaciente,
    name: formatTextWithLimit(dependent.nome, 38),
    birthdate: dependent.dataNascimento,
    cpf: formatCpf(dependent.cpf),
    status: dependent.status,
    isValidate: dependent.validacaoUltrapassada,
    documentsOk: dependent.cpfCadastrado,
  }))

  const companyMapped = data.empresa

  return { companyMapped, dependentsMapped }
}
