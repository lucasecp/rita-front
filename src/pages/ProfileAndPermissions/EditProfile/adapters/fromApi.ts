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
  profile: profile
}

type arrayToBeSetOnInitialCheckedPermissions = number[]

export const arrayOfCheckedPermissions = (
  profilesAndPermissions: profilesAndPermissions,
): arrayToBeSetOnInitialCheckedPermissions => {
  const arrayToBeSetOnInitialCheckedPermissions = []
  profilesAndPermissions.map((profile: profile) => {
    return profile.subChild.map((subChild) => {
      if (subChild.isChecked) {
        arrayToBeSetOnInitialCheckedPermissions.push(subChild.id)
      }
    })
  })

  console.log(
    arrayToBeSetOnInitialCheckedPermissions.map(Number).sort((a, b) => a - b),
  )

  return arrayToBeSetOnInitialCheckedPermissions
    .map(Number)
    .sort((a, b) => a - b)
}
