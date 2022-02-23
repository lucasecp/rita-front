export const profilesFromApi: any = (profilesFromApi: any) => {
  return profilesFromApi?.map((item: any) => ({
    id: item.id,
    name: item.nome,
    usersQuantity: item.usuarios,
    keyProfile: item.perfilChave === 'S',
  }))
}
