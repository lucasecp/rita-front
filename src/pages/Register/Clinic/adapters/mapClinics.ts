import { MultiSelectOption } from '@/components/Form/MultSelect/index'

type ClinicsToApiType = { idClinica: string | number }

export const clinicaToApi = (
  specialtys: MultiSelectOption[],
): ClinicsToApiType[] => {
  return specialtys.map((spec) => ({
    idClinica: spec.id,
  }))
}
