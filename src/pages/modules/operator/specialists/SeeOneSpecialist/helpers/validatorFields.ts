import clear from '@/helpers/clear/SpecialCaracteres'
import validateCpf from '@/helpers/validateCpf'

export const validateName = (value: string): string => {
  if (!value.trim()) {
    return 'Nome Obrigatório.'
  }

  return ''
}

export const validateSocialReason = (value: string): string => {
  if (!value.trim()) {
    return 'Nome Profissional Obrigatório.'
  }

  return ''
}
export const validateEmail = (value: string): string => {
  if (!value.trim()) {
    return 'Email Obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    return 'Email inválido.'
  }
  return ''
}

export const validateProfissionalName = (value: string): string => {
  if (!value.trim()) {
    return 'Nome Profissional Obrigatório.'
  }

  return ''
}

export const validateCPF = (value: string): string => {
  const newValue = clear(value)
  if (!newValue) return 'CPF Obrigatório.'
  else if (!validateCpf(newValue)) return 'CPF Inválido.'

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

export const validateUf = (value: string): string => {
  if (!value) {
    return 'UF Obrigatória.'
  }

  return ''
}

export const validateRegisterNumber = (value: string): string => {
  if (!value.trim()) {
    return 'Número de Registro Obrigatório.'
  }

  return ''
}

export const validateIssuingAgency = (value: string): string => {
  if (!value.trim()) {
    return 'Órgão Emissor Obrigatório.'
  }

  return ''
}
