export const validateDistrict = (value: string): string => {
  if (!value.trim()) {
    return 'Bairro Obrigatório.'
  }

  return ''
}
