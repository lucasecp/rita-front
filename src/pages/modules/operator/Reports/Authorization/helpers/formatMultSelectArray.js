export default (value) => {
  const allOptions = value.some(option => option.name === 'All')

  if(allOptions || !value.length) {
    return ''
  }
  console.log(value.map((val) => val.id))

  return value.map((val) => val.id)
}
