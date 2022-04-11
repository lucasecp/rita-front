import { formatCpf } from '@/helpers/formatCpf'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { Patients } from '../Filter'
import showStatus from './showStatus'

export interface DataReport {
  total: number
  dados: {
    id: string
    dataFiliacao?: string
    nome: string
    cpf: string
    email: string
    status: string
    validador: {
      nome: string
    }
    dataValidacao: string
    documentoOk: boolean
    rendaBaixa: boolean
    motivoDocumento: string
  }[]
}

export const formatObjectFromApi = (dataReport: DataReport): Patients => {
  return {
    total: dataReport.total,
    dataPatients: dataReport?.dados?.map((patient) => {
      return {
        id: patient?.id,
        registerDate: formateDateAndHour(patient?.dataFiliacao, ' - '),
        name: formatTextWithLimit(patient?.nome, 38),
        cpf: formatCpf(patient?.cpf),
        email: patient?.email,
        status: showStatus(patient?.status),
        validatorName: formatFirstLastName(patient?.validador?.nome),
        validationDate: formateDateAndHour(patient?.dataValidacao, ' - '),
        documentOk: patient?.documentoOk,
        income: patient?.rendaBaixa,
        reasonForNegative: patient?.motivoDocumento,
      }
    }),
  }
}
