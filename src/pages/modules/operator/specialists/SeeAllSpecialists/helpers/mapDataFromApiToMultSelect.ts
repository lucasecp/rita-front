export const mapSpecialtys = (array: any[]) => {
  if (!array) return []
  return array
    .map((obj) => ({ id: obj.idEspecialidade, name: obj.descricao }))
    .filter((specialty) => specialty.id && specialty.name)
}
