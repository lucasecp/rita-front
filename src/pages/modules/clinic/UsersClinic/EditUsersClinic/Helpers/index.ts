import isEmail from '@/helpers/isEmail'
import isValidateCpf from '@/helpers/validateCpf'
import { DataToApiI } from '../Types'

export const validateLengthField = (
  dataToApi: DataToApiI,
  setErrors: any,
): boolean => {
  if (dataToApi.typeAssistant === '') {
    setErrors({
      hasError: true,
      msgError: 'Tipo de assistente obrigatório.',
      field: 'typeAssistant',
    })
    return true
  }
  if (dataToApi.name === '') {
    setErrors({
      hasError: true,
      msgError: 'Nome obrigatório.',
      field: 'name',
    })
    return true
  }
  if (dataToApi.cpf === '') {
    setErrors({
      hasError: true,
      msgError: 'CPF obrigatório.',
      field: 'cpf',
    })
    return true
  }
  if (dataToApi.email === '') {
    setErrors({
      hasError: true,
      msgError: 'E-mail obrigatório.',
      field: 'email',
    })
    return true
  }
  if (!isEmail(dataToApi.email)) {
    setErrors({
      hasError: true,
      msgError: 'E-mail inválido.',
      field: 'email',
    })
    return true
  }
  if (dataToApi.phone === '') {
    setErrors({
      hasError: true,
      msgError: 'Celular obrigatório.',
      field: 'phone',
    })
    return true
  }
  if (Number(dataToApi.cpf.length) < 11) {
    setErrors({
      hasError: true,
      msgError: 'CPF precisa ter 11 caracteres.',
      field: 'cpf',
    })
    return true
  }
  if (!isValidateCpf(dataToApi.cpf)) {
    setErrors({
      hasError: true,
      msgError: 'CPF inválido.',
      field: 'cpf',
    })
    return true
  }
  if (Number(dataToApi.phone.length) < 11) {
    setErrors({
      hasError: true,
      msgError: 'Celular precisa ter 11 caracteres.',
      field: 'phone',
    })
    return true
  }
  setErrors({
    hasError: false,
    msgError: '',
    field: '',
  })
  return false
}
