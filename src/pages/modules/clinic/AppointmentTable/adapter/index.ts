import {
  SpecialtysContentToApiI,
  SpecialtysI,
  SpecialtysToApiI,
} from '../types'

export const fromApi = (specialtys: any[]): SpecialtysI[] => {
  return specialtys.map((spec) => ({
    id: spec.id,
    name: spec.descricao,
    price: {
      ritaPrice: spec.preco?.precoRita,
      normalPrice: spec.preco?.precoNormal,
    },
  }))
}

export const toApi = (specialtys: SpecialtysToApiI): any[] => {
  const specialtysValues: SpecialtysContentToApiI[] = Object.values(specialtys)

  return specialtysValues.map((spec) => ({
    descricao: spec.name,
    precoRita: spec.ritaPrice,
    precoNormal: spec.normalPrice,
    idEspecialidade: spec.id,
  }))
}
// [
//   {
//     "descricao": "string",
//     "precoRita": 0,
//     "precoNormal": 0,
//     "idEspecialidade": 0
//   }
// ]
// {
//   "id": 59,
//   "descricao": "FISIOCLIN",
//   "especialidades": [
//     {
//       "id": 1,
//       "descricao": "Acupuntura"
//     },
//     {
//       "id": 2,
//       "descricao": "string"
//     },
//     {
//       "id": 5,
//       "descricao": "Otorrinolaringologia ",
//       "preco": {
//         "idClinicaTabelaPrecoItem": 519,
//         "idEspecialidade": 5,
//         "idClinicaTabelaPreco": 136,
//         "precoRita": 100,
//         "precoNormal": 300
//       }
//     }
//   ]
// }
