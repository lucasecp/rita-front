import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { DataSpecialtyI } from '../types'

export const fromApi = (specialtyInfo: any[]): DataSpecialtyI[] => {
  return specialtyInfo.map((specialty) => ({
    id: specialty.idEspecialidade,
    name: formatTextWithLimit(specialty.descricao, 50) || '-',
    code: specialty.codigo || '-',
    subscriptionRequired: specialty.requerInscricao ,
  }))
}
