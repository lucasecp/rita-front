import { ErrorI } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validatePatient = (
  patient: string,
  setErrors: (errors: ErrorI) => ErrorI,
) => {
  let newErrors = false

  if (patient.length < 3) {
    // setErrors((errors: ErrorI) => ({
    //   ...errors,
    //   patient: 'Informe 3 caracteres ou mais',
    // }))
    newErrors = true
  }
  return newErrors
}
