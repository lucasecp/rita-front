import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { IssuingAgencyI } from '../types'

export const fromApi = (specialtyInfo: any[]): IssuingAgencyI[] => {
  return specialtyInfo.map((issuingAgency) => ({
    id: issuingAgency.id,
    issuingAgency: formatTextWithLimit(issuingAgency.descricao, 50) || '-',
    specialist: issuingAgency.nomeEspecialista || '-',
    status: issuingAgency.status,
    countSpecialist: issuingAgency.medicosAssociados ? issuingAgency.medicosAssociados : 0,
    countSpecialty: issuingAgency.especialidadesAssociadas ? issuingAgency.especialidadesAssociadas : 0,
  }))
}
