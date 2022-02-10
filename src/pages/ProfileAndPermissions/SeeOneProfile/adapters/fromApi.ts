export const profileAndPermissionsFromApi: any = (
  profilesAndPermissions: any,
) => {
  return profilesAndPermissions.dados.map((profileAndPermissions) => ({
    id: profileAndPermissions.id,
    name: profileAndPermissions.nome,
    subChild: profileAndPermissions.permissao.map((permission: any) => ({
      id: permission.id,
      name: permission.nome,
    })),
  }))
}

export const oneProfileFromApi = (oneProfileAndItsPermissions) => {
  return {
    name: oneProfileAndItsPermissions.nome,
  }
}

export const profilesAndPermissionsWithCheckedFromApi = (
  profilesAndPermissionsMapped,
  oneProfileAndItsPermissions,
) => {
  // oneProfileAndItsPermissions.forEach(profile)
  console.log(profilesAndPermissionsMapped)

  return profilesAndPermissionsMapped.map((profile) => ({
    ...profile,
    teste: 'teste',
    // expanded: true,
    subChild: profile.subChild.map((permission) => {
      console.log(
        oneProfileAndItsPermissions.permissoes.some(
          (oneProfilePermission) => oneProfilePermission.id === permission.id,
        ),
      )
      return {
        ...permission,
        isChecked: oneProfileAndItsPermissions.permissoes.some(
          (oneProfilePermission) => oneProfilePermission.id === permission.id,
        ),
      }
    }),
  }))
}
