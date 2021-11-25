export default (array = []) => {
  if(!array) return []
  return array.map((obj) => ({ id: obj.id, name: obj.nome }))
}

export const mapUf = (array = []) => {
  if(!array) return []
  return array.map((obj) => ({ id: obj.idUF, name: obj.sigla }))
}