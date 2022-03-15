import { MultiSelectOption } from '@/components/Form/MultSelect'

export const optionsFilteredWithAll = (
  selectedOptions: MultiSelectOption[],
  options: MultiSelectOption[],
): MultiSelectOption[] => {
  let optionsFiltered = [] as MultiSelectOption[]
  const findAllOption = selectedOptions.find((option) => option.id === 'all')

  if (findAllOption) {
    optionsFiltered = options.filter((option) => option.id !== 'all')
  } else {
    optionsFiltered = selectedOptions
  }

  return optionsFiltered
}
