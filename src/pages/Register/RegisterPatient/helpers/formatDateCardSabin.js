import formatDate from '@/helpers/formatDate'

export default (value) => {
  if (!value) return
  return value.map((dep) => ({
    ...dep,
    dataNascimento: formatDate(dep.dataNascimento),
  }))
}
