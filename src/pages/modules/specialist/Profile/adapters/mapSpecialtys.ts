import { MultiSelectOption } from '@/components/Form/MultSelect'
import { RqeAndSpecialtysType } from '../Types'

export const mapSpecialtys = (array: any[]): any[] => {
  if (!array) return []

  return array
    .map((obj) => ({
      id: obj.idEspecialidade,
      name: obj.descricao,
      rqeRequired: obj.requerInscricao,
      rqe: obj.RQE,
    }))
    .filter((specialty) => specialty.id && specialty.name)
}

type MapSpecialtysToApiType = {
  idEspecialidade: string | number
  RQE?: string | undefined
}[]

export const mapSpecialtysToApi = (
  multSelectOption?: MultiSelectOption[],
  rqe?: RqeAndSpecialtysType,
): MapSpecialtysToApiType => {
  if (!multSelectOption) {
    return []
  }
  const rqeValues = Object.values(rqe || {})

  return multSelectOption
    .filter((obj) => obj.id !== 'All')
    .reduce((ac: MapSpecialtysToApiType, obj) => {
      const matchValue = rqeValues.find((value) => value.idSpecialty === obj.id)
      const rqeObj = matchValue && matchValue.rqe ? { RQE: matchValue.rqe } : {}

      ac.push({ idEspecialidade: obj.id, ...rqeObj })
      return ac
    }, [])
}
