import moment from 'moment'
import { parse, differenceInYears } from 'date-fns'

export const validateDepBirthDate = (
  value: string,
  validateUnderAge = false,
): string => {
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

  if (validateUnderAge) {
    const dateParsed = parse(value, 'dd/MM/yyyy', new Date())
    const age = differenceInYears(new Date(), dateParsed)

    if (age > 18) return 'Seu plano só aceita dependentes menores de idade'
  }

  return ''
}
