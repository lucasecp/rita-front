import { User } from '../../../index'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

interface UserToApi {
  nome: string
  status: 'A' | 'I'
  cpf: string
  email: string
  celular: string
  perfis: number[]
}

export const userToApi = (user: Omit<User, 'id'>): UserToApi => {
  return {
    nome: user.name,
    status: user.status === 'active' ? 'A' : 'I',
    cpf: clearSpecialCaracter(user.cpf),
    email: user.email,
    celular: clearSpecialCaracter(user.phone),
    perfis: user.accessProfile.map((profile) => Number(profile.id)),
  }
}