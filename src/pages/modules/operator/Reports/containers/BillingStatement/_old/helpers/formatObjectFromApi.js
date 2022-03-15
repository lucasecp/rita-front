import formateDateAndHour from '@/helpers/formateDateAndHour'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'

export default (dataReport) => {
  return {
    total: dataReport.total,
    dataPatients: dataReport?.dados?.map((patient) => {
      return {
        registerDate: formateDateAndHour(patient?.dataFiliacao, ' - '),
        name: formatTextWithLimit(patient?.nome, 38),
        validatorName: formatFirstLastName(patient?.validador?.nome),
      }
    }),
  }
}
