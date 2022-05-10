import React from 'react'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { ErrorsI } from '../Types'

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
      // if (
      //   typeof fields[field] === 'object' &&
      //   'document' in fields[field] &&
      //   !fields[field].document
      // ) {
      //   setErrors((errors) => ({
      //     ...errors,
      //     [field]: 'Campo obrigatório',
      //   }))
      //   error = true

      //   continue
      // }
      // if (
      //   typeof fields[field] === 'object' &&
      //   'rqe' in fields[field] &&
      //   !fields[field].rqe
      // ) {
      //   setErrors((errors) => ({
      //     ...errors,
      //     [field]: 'Campo obrigatório',
      //   }))
      //   error = true

      //   continue
      // }

      if (field === 'profissionalName') {
        continue
      }
      if (typeof fields[field] !== 'object' && !fields[field]) {
        setErrors((errors) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))

        error = true
      }

      if (
        Array.isArray(fields[field]) &&
        !fields[field].length &&
        typeof fields[field] !== 'number'
      ) {
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
