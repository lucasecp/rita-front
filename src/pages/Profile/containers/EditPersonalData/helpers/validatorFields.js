import clear from '@/helpers/clear/SpecialCaracteres'
import cpfValidate from '@/helpers/validateCpf'
import moment from 'moment'

export const validateName = (value) => {
  if (!value.trim()) {
    return { name: 'Nome Obrigatório.' }
  }

  return { name: '' }
}

export const validateEmail = (email, confirmEmail) => {
  if (!email.trim()) {
    return { email: 'Email Obrigatório' }
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return { email: 'Email inválido.' }
  }

  return { email: '' }
}

export const validatePhone = (value) => {
  if (clear(value).length < 11) {
    return { phone: 'Celular inválido.' }
  }

  return { phone: '' }
}

export const validateGender = (value) => {
  if (!value) {
    return { gender: 'Campo Obrigatório.' }
  }
  return { gender: '' }
}

export const validateBirthdate = (value) => {
  const dateFormate = moment(value, 'DD/MM/YYYY', true)

  if (
    !dateFormate.isValid() ||
    moment().diff(dateFormate, 'years') >= 200 ||
    dateFormate.isAfter(moment())
  ) {
    return { birthdate: 'Data de Nascimento Inválida.' }
  }
  return { birthdate: '' }
}
