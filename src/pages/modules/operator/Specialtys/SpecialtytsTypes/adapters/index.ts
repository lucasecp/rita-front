import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { DataSpecialtyI } from '../types'

export const fromApi = (specialtyInfo: any[]): DataSpecialtyI[] => {
  return specialtyInfo.map((specialty) => ({
    id: specialty.id,
    type: formatTextWithLimit(specialty.descricao, 50) || '-',
    code: specialty.codigo || '-', 
    count: specialty.totalEspecialidade ? specialty.totalEspecialidade : 0
  }))
}
