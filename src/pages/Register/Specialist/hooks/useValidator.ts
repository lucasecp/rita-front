import { ErrorsRegisterI } from '../types/index'
import { useRegisterSpecialist } from './index'

export const useValidator = (): {
  hasErrors: (x: ErrorsRegisterI) => boolean
} => {
  const { errors, setErrors } = useRegisterSpecialist()

  const hasErrors = (fields: ErrorsRegisterI) => {
    let error = false
    setErrors({})
    const hasSpecificError = Object.values(errors)

    error = !!hasSpecificError[0]

    for (const field in fields) {
      if (!fields[field] || !fields[field].length) {
        setErrors((errors: ErrorsRegisterI) => ({
          ...errors,
          [field]: 'Campo obrigatório',
        }))
        error = true
      }
    }
    return error
  }
  return { hasErrors }
}
