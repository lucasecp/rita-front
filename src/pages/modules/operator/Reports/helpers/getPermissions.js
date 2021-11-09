import { OptionsPermission } from '../constants/OptionsPermission'

export const getOptionsPermission = (permissions) => {

 return OptionsPermission.reduce((acumulator, option) => {
    if (permissions.includes(option.value)) {
      acumulator.push(option)
    }

    return acumulator
  }, [])

}

export const getPath = (value) => {

  const path = OptionsPermission.reduce((acumulator, option) => {
    if (option.value === value) {
      acumulator = option.path
    }

    return acumulator
  }, '')

  return path
}
