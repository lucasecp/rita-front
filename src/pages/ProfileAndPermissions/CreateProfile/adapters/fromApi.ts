interface subChild {
  id: number
  name: string
  isChecked: boolean
}

interface profile {
  id: string
  name: string
  subChild: subChild[]
}

interface profilesAndPermissions {
  dados: {
    profile: profile
  }
}

type ArrayToBeSetOnInitialCheckedPermissions = number[]

interface permissions {
  id: number
  nome: string
}

export const arrayOfCheckedPermissions = (
  profilesAndPermissions: profilesAndPermissions,
): ArrayToBeSetOnInitialCheckedPermissions => {
  const arrayToBeSetOnInitialCheckedPermissions: ArrayToBeSetOnInitialCheckedPermissions =
    []
  profilesAndPermissions.map((profile: profile) => {
    return profile.subChild.map((subChild) => {
      if (subChild.isChecked) {
        arrayToBeSetOnInitialCheckedPermissions.push(subChild.id)
      }
    })
  })

  return arrayToBeSetOnInitialCheckedPermissions
    .map(Number)
    .sort((a, b) => a - b)
}

export const profileAndPermissionsFromApi = (
  profilesAndPermissions: profilesAndPermissions,
): profilesAndPermissions => {
  return profilesAndPermissions.dados.map((profileAndPermissions) => ({
    id: profileAndPermissions.id,
    name: profileAndPermissions.nome,
    subChild: profileAndPermissions.permissao.map(
      (permission: permissions) => ({
        id: permission.id,
        name: permission.nome,
      }),
    ),
  }))
}
