export const mapDataToSendApi = (area, ranges) => {
  return {
    regional: area.regional.value,
    uf: area.uf.value,
    municipios: area.cities.map((city) => city.id),
    abrangencia: ranges?.map((range) => ({
      regional: { id: range.value, nome: range.name },
      uf: { id: range.value, nome: range.name },
      municipios: range?.cities?.map((city) => ({
        id: city.id,
        nome: city.name,
      })),
    })),
  }
}
