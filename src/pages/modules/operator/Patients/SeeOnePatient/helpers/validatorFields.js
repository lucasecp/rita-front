import clear from '@/helpers/clear/SpecialCaracteres'
import cpfValidate from '@/helpers/validateCpf'
import moment from 'moment'

export const validateName = (value) => {
  if (!value.trim()) {
    return { name: 'Nome Obrigatório.' }
  }

  return { name: '' }
}

// export const validateCpf = (value) => {
//   const newValue = clear(value)

//   if (!newValue) {
//     return { cpf: 'CPF Obrigatório.' }
//   } else if (!cpfValidate(newValue)) {
//     return { cpf: 'CPF Inválido.' }
//   }

//   return { cpf: '' }
// }

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

export const validateCep = (value) => {
  if (clear(value).length < 8) {
    return { cep: 'Cep Inválido.' }
  }

  return { cep: '' }
}

export const validateCity = (value) => {
  if (!value.trim()) {
    return { city: 'Campo Obrigatório.' }
  }

  return { city: '' }
}

export const validateUf = (value) => {
  if (!value) {
    return { uf: 'Campo Obrigatório.' }
  }

  return { uf: '' }
}

export const validateDistrict = (value) => {
  if (!value.trim()) {
    return { district: 'Campo Obrigatório.' }
  }

  return { district: '' }
}

export const validateAddress = (value) => {
  if (!value.trim()) {
    return { address: 'Campo Obrigatório.' }
  }

  return { address: '' }
}

export const validateNumberHome = (value) => {
  if (!value.trim()) {
    return { numberHome: 'Campo Obrigatório.' }
  }

  return { numberHome: '' }
}

export const validateComplement = (value) => {
  if (!value.trim()) {
    return { complement: 'Campo Obrigatório.' }
  }

  return { complement: '' }
}

export const validateCpf = (value, allPersons) => {
  let message = ''
  const cpfCleared = clear(value)

  const alreadyExist =
    allPersons?.filter((person) => clear(person.cpf) === cpfCleared).length !==
    1

  if (!cpfCleared) {
    message = 'CPF Obrigatório.'
  }

  if (!cpfValidate(cpfCleared)) {
    message = 'CPF Inválido.'
  }

  if (alreadyExist) {
    message =
      'O CPF não pode ser igual ao de outra pessoa, por favor verifique os dados e preencha novamente'
  }

  return { cpf: message }
}
