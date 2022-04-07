import { MultiSelectOption } from '@/components/Form/MultSelect'

export const formatMultSelectArray = (value: MultiSelectOption[]) => {
  if (!value.length) return ''

  return value.filter((val) => val.id !== 'All').map((option) => option.id)
}
