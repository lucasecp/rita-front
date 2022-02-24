export const mapSpecialtys = (array: any[]) => {
  if (!array) return []

  return array
    .map((obj) => ({
      id: obj.idEspecialidade,
      name: obj.descricao,
    }))
    .filter((specialty) => specialty.id && specialty.name)
}

export const mapSpecialtysToApi = (array?: any[]) => {
  if (!array) return []

  return array
    .filter((obj) => obj.id !== 'All')
    .map((obj) => ({
      idEspecialidade: obj.id,
    }))
}
