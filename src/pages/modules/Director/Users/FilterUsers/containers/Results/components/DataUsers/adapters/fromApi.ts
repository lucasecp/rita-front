import { formatCpf } from '@/helpers/formatCpf'

import { User } from '../../../../../@types'
interface UsersFromApi {
  idUsuario: number
  usuario: string
  nome: string
  senha: string
  dataCadastro: string
  situacao: string
  email: string
  celular: string
  bloqueado: string
  perfis: {
    id: number
    nome: string
    perfilChave: string
  }[]
}

const statusFromApi = (status: string) => {
  const statusObject: { [x: string]: string } = {
    A: 'Ativo',
    I: 'Inativo',
  }

  return statusObject[status] || 'Sem status'
}

const blockedFromApi = (blocked: string) => {
  const blockedObject: { [x: string]: string } = {
    S: 'Sim',
    N: 'Não',
  }

  return blockedObject[blocked] || 'Sem status'
}

const isNumeric = (value: string) => {
  if (typeof value !== 'string') return false
  return !isNaN(Number(value)) && !isNaN(parseFloat(value))
}

export const fromApi = (data: UsersFromApi[]): User[] => {
  return data.map((user) => {
    const isValidUserCPF = isNumeric(user.usuario)

    return {
      id: user.idUsuario,
      name: user.nome,
      cpf: isValidUserCPF ? formatCpf(user.usuario) : '-',
      blocked: blockedFromApi(user.bloqueado),
      profile: user.perfis.map((profile) => profile.nome).join(', '),
      status: statusFromApi(user.situacao),
    }
  })
}
