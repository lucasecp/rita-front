import { OptionsPermission } from '../constants/OptionsPermission'

export const getOptionsPermission = (permissions) => {
  
 return OptionsPermission.reduce((ac, option) => {
    if (permissions.indexOf(option.value) !== -1) ac.push(option)
    return ac
  }, [])

}

export const getPath = (value) => {
  const path = OptionsPermission.reduce((ac, option) => {
    if (option.value === value) ac = option.path
    return ac
  }, '')
  return path
}
