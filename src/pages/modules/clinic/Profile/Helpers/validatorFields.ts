/** Helpers */
import { scrollOntoFieldError } from "@/helpers/scrollOntoFieldError"

export const validateField = (value: string, fieldName: string, errors: {[x: string]: string | undefined}): string => {
  if (!value.trim()) {
    scrollOntoFieldError(errors)
    return `${fieldName} é obrigatório.`
  }
  return ''
}
