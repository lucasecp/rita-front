export default (value) => {
  if (!value) return ''
  return value.toISOString()
}
