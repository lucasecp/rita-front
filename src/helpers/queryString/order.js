export const queryOrderString = (array = []) => {
  let valueString = ''

  if (!array.length) return ''

  for (let i = 0; i < array.length; i++) {
    valueString += `&orderBy=${array[i].name}&order=${array[i].value}`
  }

  return valueString
}
