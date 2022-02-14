export const arrayOfCheckedPermissions = (
  profilesAndPermissions,
  setInitialCheckedPermissions,
  setCheckedPermissions,
) => {
  const arrayToBeSetOnInitialCheckedPermissions = []
  profilesAndPermissions.map((profile) => {
    return profile.subChild.map((subChild) => {
      if (subChild.isChecked) {
        arrayToBeSetOnInitialCheckedPermissions.push(subChild.id)
      }
    })
  })

  setInitialCheckedPermissions(
    arrayToBeSetOnInitialCheckedPermissions.map(Number).sort((a, b) => a - b),
  )
  setCheckedPermissions(
    arrayToBeSetOnInitialCheckedPermissions.map(Number).sort((a, b) => a - b),
  )
}

export const checkedPermissionsWithoutFathersId = (checkedPermissions) => {
  const checkedPermissionsToSave = checkedPermissions.filter(
    (id) => id.toString().charAt(id.length - 1) !== 'F',
  )

  return checkedPermissionsToSave.map(Number).sort((a, b) => a - b)
}
