type checkedPermissions = number[]
type oneProfileName = string
type checkedProfilesToSave = number[]

interface iprofileAndPermissionsToApi {
  nome: string
  permissoes: number[]
}

export const checkedPermissionsWithoutFathersId = (
  checkedPermissions: checkedPermissions,
): checkedPermissions => {
  const checkedPermissionsToSave = checkedPermissions.filter(
    (id) => id.toString().charAt(id.length - 1) !== 'F',
  )

  return checkedPermissionsToSave.map(Number).sort((a, b) => a - b)
}

export const profileAndPermissionsToApi = (
  oneProfileName: oneProfileName,
  checkedProfilesToSave: checkedProfilesToSave,
): iprofileAndPermissionsToApi => {
  return {
    nome: oneProfileName,
    permissoes: checkedPermissionsWithoutFathersId(checkedProfilesToSave),
  }
}
