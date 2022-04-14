import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'

export const validatePhone = (phone: string, isRequired = false): string => {
  if (isRequired && !phone.trim()) {
    return 'Celular Obrigatório'
  }

  const phoneCleared = clearSpecialCharacters(phone)
  const phoneIsValid = phoneCleared[0] !== '0' && phoneCleared[2] === '9'

  if (phoneCleared.length < 11 || !phoneIsValid) {
    return 'Celular inválido.'
  }

  return ''
}
