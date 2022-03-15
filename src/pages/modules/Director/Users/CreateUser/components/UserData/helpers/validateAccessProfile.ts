import { MultiSelectOption } from '@/components/Form/MultSelect'

export const validateAccessProfile = (
  accessProfile: MultiSelectOption[],
): string => {
  const hasAccessProfile = accessProfile.some((profile) => profile.name !== '')

  if (!hasAccessProfile) {
    return 'Escolha pelo menos um perfil de acesso.'
  }

  return ''
}
