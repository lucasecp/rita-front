/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { ErrorI } from '../types'

export const validateField = (
  field: string,
  value: string,
  setErrors: React.Dispatch<React.SetStateAction<ErrorI>>,
  newErrors?: boolean,
) => {
  if (value.length < 3) {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: 'Informe 3 caracteres ou mais',
    }))
    newErrors = true
  } else {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: '',
    }))
  }
  return newErrors
}

export const validateStatus = (
  field: string,
  value: string,
  setErrors: React.Dispatch<React.SetStateAction<ErrorI>>,
  newErrors?: boolean,
) => {
  if (field === 'status' && value === '') {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: 'Campo obrigatório.',
    }))
    newErrors = true
  } else {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: '',
    }))
  }
  return newErrors
}

export const validateProtocolNumber = (
  field: string,
  value: string,
  setErrors: React.Dispatch<React.SetStateAction<ErrorI>>,
  newErrors?: boolean,
) => {
  if (field === 'protocolNumber' && value === '') {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: 'Campo obrigatório.',
    }))
    newErrors = true
  } else {
    setErrors((errors: ErrorI) => ({
      ...errors,
      [field]: '',
    }))
  }
  return newErrors
}
