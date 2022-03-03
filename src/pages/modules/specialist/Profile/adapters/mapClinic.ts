export const mapClinics = (array: any[]) => {
  if (!array) return []

  return array
    .map((obj) => ({
      id: obj.idClinica,
      name: obj.descricao,
    }))
    .filter((clinic) => clinic.id && clinic.name)
}

export const mapClinicsToApi = (array?: any[]) => {
  if (!array) return []

  return array
    .filter((obj) => obj.id !== 'All')
    .map((obj) => ({
      idClinica: obj.id,
    }))
}
