export const mapSpecialtys = (array: any[]) => {
  if (!array) return []

  return array
    .map((obj) => ({ id: obj.id, name: obj.descricao }))
}

export const mapSpecialtysToApi = (array: any[]) => {
  if (!array) return []

  return array
    .filter((obj) => obj.id !== 'All')
    .map((obj) => ({
      idEspecialidade: obj.id,
    }))
}