import { User } from '../../../index'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'

interface UserToApi {
  nome: string
  status: 'A' | 'I'
  cpf: string
  email: string
  celular: string
  idPerfil: number[]
}

export const userToApi = (user: User): UserToApi => {
  return {
    nome: user.name,
    status: user.status === 'active' ? 'A' : 'I',
    cpf: clearSpecialCaracter(user.cpf),
    email: user.email,
    celular: clearSpecialCaracter(user.phone),
    idPerfil: user.accessProfile.map((profile) => Number(profile.id)),
  }
}
