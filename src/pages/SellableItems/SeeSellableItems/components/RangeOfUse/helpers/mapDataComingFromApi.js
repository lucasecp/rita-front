import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export const mapDataComingFromApi = (ranges) => {
  // console.log('ranges: ', ranges)

  return ranges?.map((range) => ({
    regional: range.regional
      ? { label: range.regional?.nome, value: range.regional?.id }
      : '',
    uf: range.uf
      ? { label: firstLetterCapitalize(range.uf?.nome), value: range.uf?.id }
      : '',
    cities:
      range.municipios?.map((city) => ({
        name: city.nome,
        id: city.id,
      })) || [],
    showCities: false,
  }))
}
