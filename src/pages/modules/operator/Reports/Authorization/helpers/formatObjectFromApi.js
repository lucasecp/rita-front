import { formatCpf } from '@/helpers/formatCpf'
import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import formatName from '@/helpers/formatName'
import showStatus from './showStatus'

export default (dataReport) => {
  return {
    total: dataReport.total,
    dataPatients: dataReport?.dados?.map((patient) => {
      return {
        registerDate: formateDateAndHour(patient?.dataFiliacao, ' - '),
        name: formatName(patient?.nome),
        cpf: formatCpf(patient?.cpf),
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
