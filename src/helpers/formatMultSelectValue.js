export default (value) => {
  if (!value.length || !value) return ''
  return value.filter((val) => val.id !== 'All').map((option) => option.id)
}
