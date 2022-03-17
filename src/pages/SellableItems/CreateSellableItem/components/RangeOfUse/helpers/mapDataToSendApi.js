export const mapRangesToSendApi = (ranges) => {
  const rangesMapped = ranges?.map((range) => ({
    regional: range.regional
      ? { id: range.regional.value, nome: range.regional.label }
      : '',
    uf: range.uf ? { id: range.uf.value, nome: range.uf.label } : '',
    municipios: range?.cities?.map((city) => ({
      value: city.id,
      nome: city.name,
    })),
  }))

  return rangesMapped
}

export const mapDataToSendApi = ({ id, regional, uf, cities, ranges }) => {
  console.log({
    idPlano: id,
    regional,
    uf,
    municipios: cities,
    locaisVenda: mapRangesToSendApi(ranges),
  })
  return {
    idPlano: id,
    regional,
    uf,
    municipios: cities,
    locaisVenda: mapRangesToSendApi(ranges),
  }
}
