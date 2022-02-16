export const arrayOfCheckedPermissions = (profilesAndPermissions) => {
  const arrayToBeSetOnInitialCheckedPermissions = []
  profilesAndPermissions.map((profile) => {
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
