export const profilesFromApi: any = (profilesFromApi: any) => {
  // const {  } = sellableItemsResponse

  return profilesFromApi?.map((item: any) => ({
    id: item.id,
    name: item.nome,
    usersQuantity: item.usuarios,
  }))
}
