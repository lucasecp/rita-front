
export const queryOrderString = (array) => {
  let valueString = ''

  if (!array.length) return '&orderBy=dataValidacao&order=DESC'

  for (let i = 0; i < array.length; i++) {
    valueString += `&orderBy=${array[i].name}&order=${array[i].value}`
  }
  return valueString
}

export const queryFilterString = (array) => {
  let valueString = ''


  if (!array.length) return ''

  for (let i = 0; i < array.length; i++) {

    if(Array.isArray(array[i].value)){
      array[i].value.forEach(el => {valueString += `&${array[i].name}=${el}`})
      continue
    }
      valueString += `&${array[i].name}=${array[i].value}`
    }


  return valueString
}