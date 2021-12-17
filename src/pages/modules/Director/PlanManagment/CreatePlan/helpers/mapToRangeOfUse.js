import { firstLetterCapitalize } from "@/helpers/firstLetterCapitalize"

export default (ranges) => {
  if (!ranges) return []

  const dataMaped = ranges.map((range) => {
    let citiesOfRange = []

    if (range.municipios) {
      citiesOfRange = range.municipios.map((city) => ({
        name: city.nome,
        id: city.id,
      }))
    }

    return {
      cities: citiesOfRange,

      uf: range.uf ? { label: firstLetterCapitalize(range.uf?.nome), value: range.uf?.id } : '',

      regional: range.regional
        ? { label: range.regional?.nome, value: range.regional?.id }
        : '',
    }
  })
  return dataMaped
}

