import { isValid, parse, isAfter, differenceInYears } from 'date-fns'

interface ValidateBirthDependent {
  birthdate: string
}

export const validateBirthDependent = (
  value: string,
): ValidateBirthDependent => {
  const dateParsed = parse(value, 'dd/MM/yyyy', new Date())

  if (
    !isValid(dateParsed) ||
    differenceInYears(new Date(), dateParsed) >= 200 ||
    isAfter(dateParsed, new Date())
  ) {
    return { birthdate: 'Data de Nascimento Inválida.' }
  }
  return { birthdate: '' }
}
