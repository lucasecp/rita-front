export const checkedPermissionsWithoutFathersId = (checkedPermissions) => {
  const checkedPermissionsToSave = checkedPermissions.filter(
    (id) => id.toString().charAt(id.length - 1) !== 'F',
  )

  return checkedPermissionsToSave.map(Number).sort((a, b) => a - b)
}

export const profileAndPermissionsToApi: any = (
  oneProfileName,
  checkedProfilesToSave,
) => {
  return {
    nome: oneProfileName,
    permissoes: checkedPermissionsWithoutFathersId(checkedProfilesToSave),
  }
}
