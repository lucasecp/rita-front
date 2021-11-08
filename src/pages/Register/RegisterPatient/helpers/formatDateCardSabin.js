import formatDate from '@/helpers/formatDate'

export default (value) => {
  if(value.length === 0) return
  return value.map(dep => ({...dep,dataNascimento: formatDate(dep.dataNascimento)}))
}