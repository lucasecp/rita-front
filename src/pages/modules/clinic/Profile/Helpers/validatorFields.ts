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

export const validateEmail = (
  email: string,
  errors: { [x: string]: string | undefined },
): string => {
  if (isEmail(email)) {
    return ''
  } else {
    scrollOntoFieldError(errors)
    return 'E-mail inválido!'
  }
}
export const validatePhone = (
  phone: string,
  fieldName: string,
  errors: { [x: string]: string | undefined },
): string => {
  phone = phone.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '')
  if (Number(phone.length) === 11) {
    return ''
  } else {
    scrollOntoFieldError(errors)
    return `${fieldName} inválido.`
  }
}
