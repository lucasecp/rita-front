import { User } from './../index'

interface UserFromApi {
  nome: string
  status: 'A' | 'I'
  cpf: string
  email: string
  celular: string
  perfis: {
    id: number
    nome: string
  }[]
}

export const userFromApi = (data: UserFromApi): User => {
  return {
    name: data.nome,
    status: !(data.status === 'A') ? 'active' : 'inactive',
    cpf: data.cpf,
    email: data.email,
    phone: data.celular,
    accessProfile: data.perfis.map((profile) => ({
      name: profile.nome,
      id: profile.id,
    })),
  }
}
