import clearSpecialCharacters from '@/helpers/clear/SpecialCaracteres'

export const validatePhone = (phone: string): string => {
  const phoneCleared = clearSpecialCharacters(phone)
  const phoneIsValid = phoneCleared[0] !== '0' && phoneCleared[2] === '9'

  if (phoneCleared.length < 11 || !phoneIsValid) {
    return 'Celular inválido.'
  }

  return ''
}
