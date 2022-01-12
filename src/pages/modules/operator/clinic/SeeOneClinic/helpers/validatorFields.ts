import clear from '@/helpers/clear/SpecialCaracteres'
import validateCpf from '@/helpers/validateCpf'

export const validateName = (value: string): string => {
  if (!value.trim()) {
    return 'Nome Obrigatório.'
  }

  return ''
}

export const validateCPF = (value: string): string => {
  const newValue = clear(value)
  if (!newValue) return 'CPF Obrigatório.'
  else if (!validateCpf(newValue)) return 'CPF Inválido.'

  return ''
}

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'Email Obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email inválido.'
  }

  return ''
}

export const validatePhone = (value: string): string => {
  const phone = clear(value)
  const phoneIsValid = phone[0] !== '0' && phone[2] === '9'

  if (phone.length < 11 || !phoneIsValid) {
    return 'Celular inválido.'
  }

  return ''
}

export const validateCep = (value: string): string => {
  if (clear(value).length > 0 && clear(value).length < 8) {
    return 'Cep Inválido.'
  }

  return ''
}
