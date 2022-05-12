import clear from '@/helpers/clearSpecialCharacters'
import cpfValidate from '@/helpers/validateCpf'
import moment from 'moment'
import { parse, intervalToDuration, isValid } from 'date-fns'

export const validateName = (value: string): { name: string } => {
  if (!value.trim()) return { name: 'Nome Obrigatório.' }
  return { name: '' }
}

export const validateCpf = (value: string): { cpf: string } => {
  const newValue = clear(value)
  if (!newValue) return { cpf: 'CPF Obrigatório.' }
  else if (!cpfValidate(newValue)) return { cpf: 'CPF Inválido.' }

  return { cpf: '' }
}

export const validatePhone = (value: string): { phone: string } => {
  const phone = clear(value)
  const phoneIsValid = phone[0] !== '0' && phone[2] === '9'

  if (phone.length < 11 || !phoneIsValid) return { phone: 'Celular inválido.' }
  return { phone: '' }
}

export const validateGender = (value: string): { gender: string } => {
  if (!value) return { gender: 'Campo Obrigatório.' }
  return { gender: '' }
}

export const validateBirthdate = (value: string): { birthdate: string } => {
  const dateFormate = moment(value, 'DD/MM/YYYY', true)
  const birthDate = parse(value, 'dd/MM/yyyy', new Date())

  if (!value) {
    return { birthdate: 'Data de Nascimento Obrigatória.' }
  }

  if (
    !dateFormate.isValid() ||
    moment().diff(dateFormate, 'years') >= 200 ||
    dateFormate.isAfter(moment())
  ) {
    return { birthdate: 'Data de Nascimento Inválida.' }
  }

  if (isValid(birthDate)) {
    const { years } = intervalToDuration({ start: birthDate, end: new Date() })

    if (years < 18) {
      return { birthdate: 'O titular deve ser maior de 18 anos' }
    }

    return { birthdate: '' }
  }

  return { birthdate: '' }
}

export const validateCity = (value: string): { city: string } => {
  if (!value.trim()) return { city: 'Campo Obrigatório.' }
  return { city: '' }
}

export const validateUf = (value: string): { uf: string } => {
  if (!value) return { uf: 'Campo Obrigatório.' }
  return { uf: '' }
}

export const validateDistrict = (value: string): { district: string } => {
  if (!value.trim()) return { district: 'Campo Obrigatório.' }
  return { district: '' }
}

export const validateAddress = (value: string): { address: string } => {
  if (!value.trim()) return { address: 'Campo Obrigatório.' }
  return { address: '' }
}

export const validateNumberHome = (value: string): { numberHome: string } => {
  if (!value.trim()) return { numberHome: 'Campo Obrigatório.' }
  return { numberHome: '' }
}

export const validateComplement = (value: string): { complement: string } => {
  if (!value.trim()) return { complement: 'Campo Obrigatório.' }
  return { complement: '' }
}

export const validateConfEmail = (
  email: string,
  confirmEmail: string,
): { confirmEmail: string } => {
  if (email !== confirmEmail || !confirmEmail)
    return {
      confirmEmail:
        'Os e-mails preenchidos estão diferentes, por favor verifique os campos E-mail e Confirme seu e-mail.',
    }
  return { confirmEmail: '' }
}

export const validateTerms = (terms: boolean): { terms: string } => {
  if (!terms)
    return {
      terms: 'Por favor, aceite os termos para continuar.',
    }
  return { terms: '' }
}
