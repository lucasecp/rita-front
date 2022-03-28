export const profileAndPermissionsFromApi: any = (
  profilesAndPermissions: any,
) => {
  return profilesAndPermissions.dados.map((profileAndPermissions: any) => ({
    id: profileAndPermissions.id,
    name: profileAndPermissions.nome,
    subChild: profileAndPermissions.permissao.map((permission: any) => ({
      id: permission.id,
      name: permission.nome,
    })),
  }))
}

export const oneProfileFromApi = (oneProfileAndItsPermissions: any) => {
  return {
    name: oneProfileAndItsPermissions.nome,
  }
}

export const profilesAndPermissionsWithCheckedFromApi = (
  profilesAndPermissionsMapped: any,
  oneProfileAndItsPermissions: any,
) => {
  // oneProfileAndItsPermissions.forEach(profile)

  return profilesAndPermissionsMapped.map((profile: any) => ({
    ...profile,
    // expanded: true,
    subChild: profile.subChild.map((permission: any) => {
      return {
        ...permission,
        isChecked: oneProfileAndItsPermissions.permissoes.some(
          (oneProfilePermission: any) =>
            oneProfilePermission.id === permission.id,
        ),
      }
    }),
  }))
}
