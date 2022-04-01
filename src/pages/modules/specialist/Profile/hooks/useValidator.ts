import React from 'react'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import {
  SpecialistInfoI,
  SpecialtysAndDocsType,
  RqeAndSpecialtysType,
  ErrorsI,
} from '../Types'

type FieldsType = MultiSelectOption[] &
  SpecialistInfoI &
  SpecialtysAndDocsType &
  RqeAndSpecialtysType

export const useValidator = (): {
  hasErrorOnFields: (
    field: any,
    setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>,
  ) => boolean
} => {
  const hasErrorOnFields = (
    fields: any,
    setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>,
  ) => {
    let error = false

    setErrors({})

    for (const field in fields) {
      if (
        typeof fields[field] === 'object' &&
        'document' in fields[field] &&
        !fields[field].document
      ) {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))
        error = true

        continue
      }
      if (
        typeof fields[field] === 'object' &&
        'rqe' in fields[field] &&
        !fields[field].rqe
      ) {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))
        error = true

        continue
      }

      if (typeof fields[field] !== 'object' && !fields[field]) {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))

        error = true
      }

      if (Array.isArray(fields[field]) && !fields[field].length) {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))

        error = true
      }
    }
    return error
  }
  return { hasErrorOnFields }
}
