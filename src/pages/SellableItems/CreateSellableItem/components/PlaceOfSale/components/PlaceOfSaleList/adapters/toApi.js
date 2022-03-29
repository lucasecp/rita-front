export const mapRangesToSendApi = (ranges) => {
  const rangesMapped = ranges?.map((range) => ({
    regional: range.regional
      ? { id: range.regional.id, nome: range.regional.label }
      : '',
    uf: range.uf ? { id: range.uf.id, nome: range.uf.label } : '',
    municipios: range?.cities?.map((city) => ({
      id: city.id,
      nome: city.name,
    })),
  }))

  return rangesMapped
}

export const mapDataToSendApi = ({ id, regional, uf, cities, ranges }) => {
  return {
    idPlano: id,
    regional,
    uf,
    municipios: cities,
    locaisVenda: mapRangesToSendApi(ranges),
  }
}
