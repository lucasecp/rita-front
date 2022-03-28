import moment from 'moment'

export const validateBirthDate = (value: string): string => {
  if (!value.trim()) {
    return 'Data de Nascimento Obrigatória'
  }

  const dateFormate = moment(value, 'DD/MM/YYYY', true)

  if (
    !dateFormate.isValid() ||
    moment().diff(dateFormate, 'years') >= 200 ||
    dateFormate.isAfter(moment())
  ) {
    return 'Data de Nascimento Inválida.'
  }
  return ''
}
