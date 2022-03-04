import clear from '@/helpers/clear/SpecialCaracteres'
import isEmail from '@/helpers/isEmail'
import moment from 'moment'

export const validateGender = (value) => {
  if (!value) {
    return 'Campo Obrigatório.'
  }

  return ''
}

export const validateEmail = (value) => {
  const regexToValidateEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  if (!clear(value).length) {
    return 'Campo Obrigatório.'
  }

  if (!regexToValidateEmail.test(value.trim())) {
    return 'E-mail inválido'
  }

  return ''
}

export const validateCep = (value) => {
  if (clear(value.replace(/\D/g, '')).length !== 8) {
    return 'Cep Inválido.'
  }

  return ''
}

export const validateUF = (value) => {
  if (!clear(value).length) {
    return 'UF Inválido.'
  }

  return ''
}

export const validateCity = (value) => {
  if (!clear(value).length) {
    return 'Cidade Inválido.'
  }

  return ''
}

export const validateAddress = (value) => {
  if (!clear(value).length) {
    return 'Endereço Inválido.'
  }

  return ''
}

export const validateNumber = (value) => {
  if (!clear(value).length) {
    return 'Número Inválido.'
  }

  return ''
}

export const validateDistrict = (value) => {
  if (!clear(value).length) {
    return 'Bairro Inválido.'
  }

  return ''
}
