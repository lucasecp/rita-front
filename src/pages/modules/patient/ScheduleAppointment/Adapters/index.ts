import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatMobilePhone } from '@/helpers/formatMobilePhone'
import { DoctorI } from '../types'
import { ClinicI } from '../types/index'

export const fromApi = (dataResults: any[]) => {
  const doctor: DoctorI[] = dataResults
    .filter((result) => result.tipo === 'medico')
    .map((docInfo) => ({
      photo: docInfo.avatar,
      name: firstLetterCapitalize(docInfo.nome),
      id: docInfo.id,
      crm: docInfo.conselhoRegional,
      verified: docInfo.validadoClinica,
      specialtys: docInfo?.especialidades?.map((spe: any) => spe),
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
