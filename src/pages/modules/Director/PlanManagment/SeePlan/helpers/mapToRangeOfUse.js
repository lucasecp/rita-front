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

// municipios: [{id: 4, nome: "Abaete"}]
// regional: {id: 1, nome: "Sudeste"}
// uf: {id: 13, sigla: "MG", nome: "MINAS GERAIS"}
// {
//     regional: { label: 'Centro Oeste', value: 5 },
//     uf: { label: 'Distrito Federal', value: 9 },
//     cities: [
//       { name: 'Brasília', id: 2 },
//       { name: 'Gama', id: 3 },
//       { name: 'Taguatinga', id: 4 },
//       { name: 'Brazlândia', id: 5 },
//       { name: 'Planaltina', id: 9 },
//       { name: 'Paranoá', id: 7 },
//     ],
//     showCities: false,
//   },
