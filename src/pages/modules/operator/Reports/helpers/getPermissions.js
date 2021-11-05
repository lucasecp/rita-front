import { OptionsPermission } from '../constants/OptionsPermission'

export const getOptionsPermission = (permissions) => {
  return OptionsPermission.map(
    (permission) => permissions.indexOf(permission.value) !== -1 && permission
  )
}

export const getPath = (value) => {
  const path = OptionsPermission.reduce((ac, permission) => {
    if (permission.value === value) ac = permission.path
    return ac
  }, '')
  return path
}
