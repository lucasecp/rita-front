import isEmail from '@/helpers/isEmail'
import isValidateCpf from '@/helpers/validateCpf'
import { DataToApiI, ValidationErrorFieldsI } from '../Types'

export const validateLengthField = (
  dataToApi: DataToApiI,
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>,
): boolean => {

  const errors = []

  const checkIFPhoneMoreThen11Caraters = () => {
    if (Number(dataToApi.phone.length) < 11) {
      setErrors((errors) => ({
        ...errors,
        phone: 'Celular precisa ter 11 caracteres.',
      }))
      errors.push(true)
    }else {
      setErrors((errors) => ({
        ...errors,
        phone: '',
      }))
    }
  }

  const checkIFCPFMoreThen11Caracters = () => {
    if (Number(dataToApi.cpf.length) > 0 && Number(dataToApi.cpf.length) < 11) {
      setErrors((errors) => ({
        ...errors,
        cpf: 'CPF precisa ter 11 caracteres.',
      }))
      errors.push(true)
    }else {
      setErrors((errors) => ({
        ...errors,
        cpf: '',
      }))
    }
  }

  const checkIFValidateCPF = () => {
    if (!isValidateCpf(dataToApi.cpf)) {
      setErrors((errors) => ({
        ...errors,
        cpf: 'CPF inválido.',
      }))
      errors.push(true)
    }
    else {
      setErrors((errors) => ({
        ...errors,
        cpf: '',
      }))
    }
  }

  if (dataToApi.typeAssistant === '') {
    setErrors((errors) => ({
      ...errors,
      typeAssistant: 'Tipo de assistente obrigatório.',
    }))
    errors.push(true)
  }else {
    setErrors((errors) => ({
      ...errors,
      typeAssistant: '',
    }))
  }

  if (dataToApi.name === '') {
    setErrors((errors => ({
      ...errors,
      name: 'Nome obrigatório.',
    })))
    errors.push(true)
  }else {
    setErrors((errors) => ({
      ...errors,
      name: '',
    }))
  }


  if (dataToApi.cpf === '') {
    setErrors((errors => ({
      ...errors,
      cpf: 'CPF obrigatório.',
    })))
    errors.push(true)
  }else {
    checkIFCPFMoreThen11Caracters()
    checkIFValidateCPF()
  }

  if (dataToApi.phone === '') {
    setErrors((errors => ({
      ...errors,
      phone: 'Celular obrigatório.',
    }
    )))
    errors.push(true)
  }else {
    checkIFPhoneMoreThen11Caraters()
  }

  if(!errors.length){
    return false
  }else{
    return true
  }

}
