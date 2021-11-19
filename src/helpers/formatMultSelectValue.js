export default (value) => {
  if(!value.length) return ''
  return value.filter((val) => val.id !== 'All').map(option => option.id)
}
