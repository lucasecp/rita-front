import { MultiSelectOption } from '@/components/Form/MultSelect/index'

type SpecialtysToApiType = { idEspecialidade: string | number; RQE: string }

export const specialtysToApi = (
  specialtys: MultiSelectOption[],
): SpecialtysToApiType[] => {
  return specialtys.map((spec) => ({
    RQE: spec.req,
    idEspecialidade: spec.id,
  }))
}
