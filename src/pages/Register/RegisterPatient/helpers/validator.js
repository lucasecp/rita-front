import clear from '@/helpers/clear/SpecialCaracteres'
import cpfValidate from '@/helpers/validateCpf'
import moment from 'moment'
import { parse, intervalToDuration, isValid } from 'date-fns';

export const validateName = (value) => {
  if (!value.trim()) return { name: 'Nome Obrigatório.' }
  return { name: '' }
}

export const validateEmail = (email, confirmEmail) => {
  if (!email.trim()) return { email: 'Email Obrigatório' }
  else if (!/\S+@\S+\.\S+/.test(email)) return { email: 'Email inválido.' }
  else if (email !== confirmEmail && confirmEmail)
    return {
      confirmEmail:
        'Os e-mails preenchidos estão diferentes, por favor verifique os campos E-mail e Confirme seu e-mail.',
    }
  return { email: '', confirmEmail: '' }
}

export const validateCpf = (value) => {
  const newValue = clear(value)
  if (!newValue) return { cpf: 'CPF Obrigatório.' }
  else if (!cpfValidate(newValue)) return { cpf: 'CPF Inválido.' }

  return { cpf: '' }
}

export const validatePhone = (value) => {
  const phone = clear(value)
  const phoneIsValid = phone[0] !== '0' && phone[2] === '9'

  if (phone.length < 11 || !phoneIsValid) return { phone: 'Celular inválido.' }
  return { phone: '' }
}

export const validateGender = (value) => {
  if (!value) return { gender: 'Campo Obrigatório.' }
  return { gender: '' }
}

export const validateBirthdate = (value) => {
  const dateFormate = moment(value, 'DD/MM/YYYY', true)
  const birthDate = parse(value, 'dd/MM/yyyy', new Date())

  console.log(isValid(birthDate));

  if (
    !dateFormate.isValid() ||
    moment().diff(dateFormate, 'years') >= 200 ||
    dateFormate.isAfter(moment())
  ) {
    return { birthdate: 'Data de Nascimento Inválida.' }
  } else if (isValid(birthDate)) {
    const { years } = intervalToDuration({ start: birthDate, end: new Date()});

    if (years < 18) {
      return { birthdate: 'O titular deve ser maior de 18 anos'}
    }

    return { birthdate: '' }
  }
  return { birthdate: '' }
}

export const validateCep = (value) => {
  if (clear(value).length > 0 && clear(value).length < 8) {
    return { cep: 'Cep Inválido.' }
  }

  return { cep: '' }
}

export const validateCity = (value) => {
  if (!value.trim()) return { city: 'Campo Obrigatório.' }
  return { city: '' }
}

export const validateUf = (value) => {
  if (!value) return { uf: 'Campo Obrigatório.' }
  return { uf: '' }
}

export const validateDistrict = (value) => {
  if (!value.trim()) return { district: 'Campo Obrigatório.' }
  return { district: '' }
}

export const validateAddress = (value) => {
  if (!value.trim()) return { address: 'Campo Obrigatório.' }
  return { address: '' }
}

export const validateNumberHome = (value) => {
  if (!value.trim()) return { numberHome: 'Campo Obrigatório.' }
  return { numberHome: '' }
}

export const validateComplement = (value) => {
  if (!value.trim()) return { complement: 'Campo Obrigatório.' }
  return { complement: '' }
}
