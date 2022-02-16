import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import formatCnpj from '@/helpers/formatCnpj'
import { DataClinicI } from '../types'

export const fromApi = (clinicInfo: any[]): DataClinicI[] => {
  return clinicInfo.map((clinic) => ({
    id: clinic.idClinica,
    name: formatTextWithLimit(clinic.descricao, 50) || '-',
    cnpj: formatCnpj(clinic.cnpj) || '-',
    status: clinic.status || '-',
  }))
}
