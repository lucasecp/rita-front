export const profileAndPermissionsToApi: any = (
  oneProfileName,
  checkedProfilesToSave,
) => {
  return {
    nome: oneProfileName,
    permissoes: checkedProfilesToSave,
  }
}
