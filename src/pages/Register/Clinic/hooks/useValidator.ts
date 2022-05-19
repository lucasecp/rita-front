import { ErrorsRegisterI } from '../types/index'
import { useRegisterClinic } from './index'

export const useValidator = (): {
  hasErrors: (x: any) => boolean
} => {
  const { setErrors } = useRegisterClinic()

  const hasErrors = (fields: ErrorsRegisterI) => {
    let error = false
    setErrors({} as ErrorsRegisterI)

    for (const field in fields) {
      if (
        !fields[field] ||
        (Array.isArray(fields[field]) && !fields[field].length)
      ) {
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
