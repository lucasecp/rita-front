const clearSpecialCaracter = (value) => {
  return value.replace(/[^a-zA-Z0-9]/g, '')
}
export default clearSpecialCaracter