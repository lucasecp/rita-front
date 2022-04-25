import { DataUsersClinic } from '../types'

export const fromApi = (clinicInfo: any[]): DataUsersClinic[] => {
  return clinicInfo.map((user) => ({
    idClinica: user.idClinica,
    idUsuario: user.idUsuario,
    nome: user.nome,
    email: user.email,
    perfil: user.perfil
  }))
}
