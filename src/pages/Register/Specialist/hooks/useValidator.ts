import { ErrorsRegisterI } from '../types/index'
import { useRegisterSpecialist } from './index'

export const useValidator = (): {
  hasErrors: (x: any) => boolean
} => {
  const { setErrors } = useRegisterSpecialist()

  const hasErrors = (fields: ErrorsRegisterI) => {
    let error = false
    setErrors({} as ErrorsRegisterI)

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
