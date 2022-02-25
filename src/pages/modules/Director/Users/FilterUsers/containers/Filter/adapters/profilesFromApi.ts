import { MultiSelectOption } from '@/components/Form/MultSelect'

export interface ProfilesFromApi {
  id: number
  nome: string
}

export const profilesFromApi = (
  data: ProfilesFromApi[],
): MultiSelectOption[] => {
  return data.map((profile) => {
    return {
      id: profile.id,
      name: profile.nome,
    }
  })
}
