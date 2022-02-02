export const profilesAndPermissionMapped: any = (
  profilesAndPermissionsFromApi: any,
) => {
  return {
    id: profilesAndPermissionsFromApi.id,
    name: profilesAndPermissionsFromApi.nome,
    permissions: profilesAndPermissionsFromApi.permissoes.map(
      (permission: any) => ({
        key: permission.chave,
        id: permission.id,
        idPermissionGroup: permission.idGrupoPermissao,
        name: permission.nome,
      }),
    ),
  }
}
