export const mapSpecialtys = (array: any[]) => {
  if (!array) return []

  return array
    .map((obj) => ({
      id: obj.idEspecialidade,
      name: obj.descricao,
      code: obj.codigo,
      requireRqe: obj.requerInscricao,
    }))
    .filter((specialty) => specialty.id && specialty.name)
}
export const mapSpecialtysToApi = (array: any[]) => {
  if (!array) return []

  return array.map((obj) => ({
    idEspecialidade: obj.id,
    descricao: obj.name,
    codigo: obj.code,
    requerInscricao: obj.requireRqe,
  }))
}
