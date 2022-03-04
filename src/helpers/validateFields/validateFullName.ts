export const validateFullName = (name: string): string => {
  if (!name.trim()) {
    return 'Nome Obrigatório.'
  }

  return ''
}
