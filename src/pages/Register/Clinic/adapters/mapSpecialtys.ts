import { MultiSelectOption } from '@/components/Form/MultSelect/index'

type SpecialtysToApiType = { idEspecialidade: string | number }

export const specialtysToApi = (
  specialtys: MultiSelectOption[],
): SpecialtysToApiType[] => {
  return specialtys.map((spec) => ({
    idEspecialidade: spec.id,
  }))
}
