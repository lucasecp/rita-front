import clear from '@/helpers/clear/SpecialCaracteres'
import validateCpf from '@/helpers/validateCpf'
import moment from 'moment'

export const validateName = (value) => {
  if (!value.trim()) {
    return 'Nome Obrigatório.'
  }

  return ''
}

export const validateCPF = (value) => {
  const newValue = clear(value)
  if (!newValue) return 'CPF Obrigatório.'
  else if (!validateCpf(newValue)) return 'CPF Inválido.'

  return ''
}

export const validateEmail = (email, confirmEmail) => {
  if (!email.trim()) {
    return 'Email Obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email inválido.'
  }

  return ''
}

export const validatePhone = (value) => {
  const phone = clear(value)
  const phoneIsValid = phone[0] !== '0' && phone[2] === '9'

  if (phone.length < 11 || !phoneIsValid) {
    return 'Celular inválido.'
  }

  return ''
}

export const validateGender = (value) => {
  if (!value) {
    return 'Campo Obrigatório.'
  }

  return ''
}

export const validateBirthdate = (value) => {
  const dateFormate = moment(value, 'DD/MM/YYYY', true)

  if (!clear(value)) {
    return 'Data de Nascimento Obrigatório.'
  }

  if (
    !dateFormate.isValid() ||
    moment().diff(dateFormate, 'years') >= 200 ||
    dateFormate.isAfter(moment())
  ) {
    return 'Data de Nascimento Inválida.'
  }

  return ''
}

export const validateCep = (value) => {
  if (clear(value).length > 0 && clear(value).length < 8) {
    return 'Cep Inválido.'
  }

  return ''
}
