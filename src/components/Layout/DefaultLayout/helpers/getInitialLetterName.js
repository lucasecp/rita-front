import formatFirstLastName from '@/helpers/formatFirstLastName'

export const getInitialLetterName = (name) => {
  const firstAndLastName = formatFirstLastName(name)
  const first = firstAndLastName.split(' ')[0][0]
  const last = firstAndLastName.split(' ')[1][0]
  return `${first} ${last}`
}