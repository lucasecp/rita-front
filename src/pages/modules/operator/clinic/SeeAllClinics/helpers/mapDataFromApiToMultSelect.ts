export const mapSpecialtys = (array: any[]) => {
  if (!array) return []
  return array
    .map((obj) => ({ id: obj.idEspecialidade, name: obj.descricao }))
    .filter((specialty) => specialty.id && specialty.name)
}

export const mapUf = (array: any[]) => {
  if (!array) return []
  return array.map((obj) => ({ id: obj.idUF, name: obj.sigla }))
}

export const mapCity = (array: any[]) => {
  if (!array) return []
  return array.map((obj) => ({ id: obj.idMunicipio, name: obj.descricao }))
}
