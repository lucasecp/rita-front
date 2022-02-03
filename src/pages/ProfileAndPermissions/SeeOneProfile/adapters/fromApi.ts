export const fromApi: any = (profilesAndPermissions: any) => {
  return profilesAndPermissions.dados.map((profileAndPermissions) => ({
    id: profileAndPermissions.id,
    name: profileAndPermissions.nome,
    subChild: profileAndPermissions.permissao.map((permission: any) => ({
      id: permission.id,
      name: permission.nome,
    })),
  }))
}
