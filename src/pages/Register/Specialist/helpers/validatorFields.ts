export const genericValidate = (value: string, fieldName: string) => {
  if (!value?.trim().length) {
    return `Campo ${fieldName} Obrigatório.`
  }
  return ''
}
