import clearSpecialCharacters from "../clearSpecialCharacters"

export const validateTwoPhoneTypes = (value: string): string => {
  const phone = clearSpecialCharacters(value)

  if (phone.length === 10 && (phone[0] === '0' || phone[2] === '9')) {
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
