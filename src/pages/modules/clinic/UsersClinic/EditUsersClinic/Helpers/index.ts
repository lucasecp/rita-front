import isValidateCpf from '@/helpers/validateCpf'
import { DataToApiI, ValidationErrorFieldsI } from '../Types'

export const validateLengthField = (
  dataToApi: DataToApiI,
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrorFieldsI>>,
): boolean => {

  const errors = []

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
    setErrors((errors) => ({
      ...errors,
      cpf: '',
    }))
  }

  // if (dataToApi.email === '') {
  //   setErrors((errors => ({
  //     ...errors,
  //     email: 'E-mail obrigatório.',
  //   })))
  //   errors.push(true)
  // }else {
  //   setErrors((errors) => ({
  //     ...errors,
  //     email: '',
  //   }))
  // }

  // if (!isEmail(dataToApi.email)) {
  //   setErrors((errors => ({
  //     ...errors,
  //     email: 'E-mail inválido.',
  //   })))
  //   errors.push(true)
  // }else {
  //   setErrors((errors) => ({
  //     ...errors,
  //     email: '',
  //   }))
  // }

  if (dataToApi.phone === '') {
    setErrors((errors => ({
      ...errors,
      phone: 'Celular obrigatório.',
    }
    )))
    errors.push(true)
  }else {
    setErrors((errors) => ({
      ...errors,
      phone: '',
    }))
  }

  if (Number(dataToApi.cpf.length) < 11) {
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

  if(!errors.length){
    return false
  }else{
    return true
  }

}
