import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { DoctorI, ClinicI } from '../types'

export const fromApi = (dataResults: any[]) => {
  const doctor: DoctorI[] = dataResults
    .filter((result) => result.tipo === 'medico')
    .map((docInfo) => ({
      photo: docInfo.avatar,
      name: firstLetterCapitalize(docInfo.nome),
      id: docInfo.id,
      crm: docInfo.registroProfissional,
      verified: docInfo.conselhoValidado,
      specialtys: docInfo.especialidades.map((spe: any) => ({
        verified: spe.rqeValidado,
        RQE: spe.RQE,
        name: spe.descricao,
      })),
    }))

  const clinic: ClinicI[] = dataResults
    .filter((result) => result.tipo === 'clinica')
    .map((docInfo) => ({
      photo: docInfo.avatar,
      name: firstLetterCapitalize(docInfo.nome),
      id: docInfo.id,
      specialtys: docInfo?.especialidades?.map((spe: any) => spe),
    }))

  return { doctor, clinic }
}
