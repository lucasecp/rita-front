export const mapClinics = (array: any[]): any[] => {
  if (!array) return []

  return array
    .map((obj) => ({
      id: obj.idClinica,
      name: obj.descricao,
    }))
    .filter((specialty) => specialty.id && specialty.name)
}

export const mapClinicsToAPi = (array: any[]): any[] => {
  if (!array) return []

  return array
    .filter((obj) => obj.id !== 'All')
    .map((obj) => ({
      idClinica: obj.id,
    }))
}
