import clear from '@/helpers/clear/SpecialCaracteres'
import validateCpf from '@/helpers/validateCpf'

export const validateName = (value: string): string => {
  if (!value.trim()) {
    return 'Nome Fantasia Obrigatório.'
  }

  return ''
}

export const validateStatus = (value: string): string => {
  if (!value) {
    return 'Situação Obrigatória.'
  }

  return ''
}

export const validateSocialReason = (value: string): string => {
  if (!value.trim()) {
    return 'Razão Social Obrigatória.'
  }

  return ''
}
export const validateAdminName = (value: string): string => {
  if (!value.trim()) {
    return 'Administrador da clínica Obrigatório.'
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
export const validateTwoPhone = (value: string): string => {
  const phone = clear(value)

  if (phone.length === 10 && (phone[0] === 0 || phone[2] === '9')) {
    return 'Telefone inválido.'
  }

  if (phone.length === 11 && (phone[0] === '0' || phone[2] !== '9')) {
    return 'Celular inválido.'
  }

  if (phone.length < 10) {
    return 'Telefone/Celular inválido.'
  }

  return ''
}

export const validateCep = (value: string): string => {
  if (clear(value).length > 0 && clear(value).length < 8) {
    return 'Cep Inválido.'
  }

  return ''
}

export const validateCity = (value: string): string => {
  if (!value.trim()) {
    return 'Cidade Obrigatória.'
  }

  return ''
}
export const validateUf = (value: string): string => {
  if (!value) {
    return 'UF Obrigatória.'
  }

  return ''
}

export const validateAddress = (value: string): string => {
  if (!value.trim()) {
    return 'Endereço Obrigatório.'
  }

  return ''
}
export const validateNumberHome = (value: string): string => {
  if (!value.trim()) {
    return 'Número Obrigatório.'
  }

  return ''
}

export const validateDistrict = (value: string): string => {
  if (!value.trim()) {
    return 'Bairro Obrigatório.'
  }

  return ''
}
