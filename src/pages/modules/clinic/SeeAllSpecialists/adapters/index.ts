import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { formatCpf } from '@/helpers/formatCpf'
import { DataSpecialist } from '../types'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export const fromApi = (specialistInfo: any[]): DataSpecialist[] => {
  return specialistInfo.map((spec) => ({
    id: spec.idMedico,
    name: spec.nome,
    cpf: formatCpf(spec.cpf) || '-',
    status: spec.status || '-',
    registerNumber: spec.registroProfissional || '-',
    // issuingAgency: spec.orgaoEmissor?.descricao
    //   ? spec.orgaoEmissor?.descricao + ' ' + spec.ufOrgaoEmissor.toUpperCase()
    //   : '-',
    issuingAgency: spec.orgaoEmissor?.descricao || '-',
  }))
}
