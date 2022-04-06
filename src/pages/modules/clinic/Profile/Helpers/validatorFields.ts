/** Helpers */
import isEmail from '@/helpers/isEmail'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'

export const validateField = (
  value: string,
  fieldName: string,
  errors: { [x: string]: string | undefined },
): string => {
  if (!value.trim()) {
    scrollOntoFieldError(errors)
    return `${fieldName} é obrigatório.`
  }
  return ''
}

export const validateEmail = (email: string, errors: { [x: string]: string | undefined }) => {
  if(isEmail(email)) {
    return ''
  }else {
    scrollOntoFieldError(errors)
    return 'E-mail inválido!'
  }
}

