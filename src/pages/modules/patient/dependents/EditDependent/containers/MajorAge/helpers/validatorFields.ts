import clear from '@/helpers/clear/SpecialCaracteres'

export const validateGender = (value: string): string => {
  if (!value) {
    return 'Campo Obrigatório.'
  }

  return ''
}

export const validateEmail = (value: string): string => {
  const regexToValidateEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  if (!clear(value).length) {
    return 'Campo Obrigatório.'
  }

  if (!regexToValidateEmail.test(value.trim())) {
    return 'E-mail inválido'
  }

  return ''
}

export const validateCep = (value: string): string => {
  if (clear(value.replace(/\D/g, '')).length !== 8) {
    return 'Cep Inválido.'
  }

  return ''
}

export const validateUF = (value: string): string => {
  if (!clear(value).length) {
    return 'UF Inválido.'
  }

  return ''
}

export const validateCity = (value: string): string => {
  if (!clear(value).length) {
    return 'Cidade Inválido.'
  }

  return ''
}

export const validateAddress = (value: string): string => {
  if (!clear(value).length) {
    return 'Endereço Inválido.'
  }

  return ''
}

export const validateNumber = (value: string): string => {
  if (!clear(value).length) {
    return 'Número Inválido.'
  }

  return ''
}

export const validateDistrict = (value: string): string => {
  if (!clear(value).length) {
    return 'Bairro Inválido.'
  }

  return ''
}
