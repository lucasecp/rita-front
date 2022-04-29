export const mapClinics = (clinics: any[]) => {
  if (!clinics) return []

  return clinics.map((obj) => ({
    id: obj.idClinica,
    label: obj.descricao,
    value: obj.idClinica,
  }))
}
