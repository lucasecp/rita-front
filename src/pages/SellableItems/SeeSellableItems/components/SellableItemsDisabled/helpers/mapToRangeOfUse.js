import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export default (ranges) => {
  if (!ranges) return []

  const dataMaped = ranges.map((range) => {
    return {
      cities: range.municipios
        ? { label: range.municipios.nome, value: range.municipios.id }
        : '',

      uf: range.uf
        ? { label: firstLetterCapitalize(range.uf?.nome), value: range.uf?.id }
        : '',

      regional: range.regional
        ? { label: range.regional?.nome, value: range.regional?.id }
        : '',
    }
  })
  return dataMaped
}
