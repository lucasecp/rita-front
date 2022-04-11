const clearSpecialCaracter = (value: string): string => {
  if (!value) return ''
  return value.replace(/[^a-zA-Z0-9 ]/g, '')
}

export default clearSpecialCaracter
