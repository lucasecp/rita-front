export const queryOrderString = (array) => {
  let valueString = ''

  if (!array.length) return ''

  for (let i = 0; i < array.length; i++) {
    valueString += `&orderBy=${array[i].name}&order=${array[i].value}`
  }
  return valueString
}

export const queryFilterString = (array) => {
  let valueString = ''

  for (let i = 0; i < array.length; i++) {
    valueString += `&${array[i].name}=${array[i].value}`
  }

  const hasStatus = array.find((item) => item.name === 'status')

  if (!hasStatus) {
    valueString += `&status=P&status=EA`
  }

  return valueString
}
