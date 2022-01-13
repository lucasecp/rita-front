import formatFirstLastName from '@/helpers/formatFirstLastName'
import formatCnpj from '@/helpers/formatCnpj'
import { DataClinicI } from '../types'

export const fromApi = (clinicInfo: any[]): DataClinicI[] => {
  return clinicInfo.map((clinic) => ({
    id: clinic.idClinica,
    name: formatFirstLastName(clinic.descricao) || '-',
    cnpj: formatCnpj(clinic.cnpj) || '-',
    status: clinic.status || '-',
  }))
}
