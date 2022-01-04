export const mapRangesToSendApi = (ranges) => {
  const rangesMapped = ranges?.map((range) => ({
    regional: range.regional
      ? { id: range.regional.value, nome: range.regional.label }
      : '',
    ...(range.uf && { uf: { id: range.uf.value, nome: range.uf.label } }),
    ...(range.cities.length > 0 && {
      municipios: range?.cities?.map((city) => ({
        id: city.id,
        nome: city.name,
      })),
    }),
  }))

  return rangesMapped
}
