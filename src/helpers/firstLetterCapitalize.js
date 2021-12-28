export const firstLetterCapitalize = (stringOriginal) => {
  if (typeof stringOriginal !== 'string') {
    return ''
  }
  let strings = stringOriginal.split(' ')
  strings = strings.filter((string) => string !== '')
  strings = strings.map((str) =>
    (str[0].toUpperCase() + str.slice(1).toLowerCase()).trim(),
  )
  const string = strings.join(' ')
  return string
}
