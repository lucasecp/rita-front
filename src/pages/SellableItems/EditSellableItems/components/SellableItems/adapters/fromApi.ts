import { SellableItemsData } from '../index'

interface SellableItemsFromApi {
  codigo: string
  id: number
  idPlano: number
  locaisVenda: {
    uf: {
      id: number
      sigla: string
      nome: string
    }
    regional: {
      id: number
      nome: string
    }
    municipios: {
      id: number
      nome: string
    }[]
  }[]
  localVenda: string
  nome: string
  status: string
  tipo: string
  valor: number
}

interface PlanFromApi {
  idPlano: number
  codigo: string
  nome: string
  status: string
  descricao: string
  servicos: {
    id: number
    nome: string
  }[]
  abrangencia: {
    regional: {
      id: number
      nome: string
    }
    uf: {
      id: number
      sigla: string
      nome: string
    }
    municipios: {
      id: number
      nome: string
    }[]
  }[]
}

const setStatus: { [x: string]: string } = {
  I: 'Inativo',
  P: 'Em Digitação',
  A: 'Ativo',
  S: 'Suspenso',
}

export const sellableItemsFromApi = (
  dataSellableItems: SellableItemsFromApi,
  dataPlan: PlanFromApi,
): SellableItemsData => {
  return {
    code: dataSellableItems.codigo,
    name: dataSellableItems.nome,
    status: setStatus[dataSellableItems.status],
    description: dataPlan.descricao,
    services: dataPlan.servicos.map((service) => ({
      id: service.id,
      name: service.nome,
    })),
    placeOfSale: dataSellableItems.locaisVenda.map((placeOfSale) => ({
      cities: placeOfSale.municipios?.map((city) => ({
        id: city.id,
        name: city.nome,
      })),
      uf: {
        id: placeOfSale.uf?.id,
        acronym: placeOfSale.uf?.sigla,
        name: placeOfSale.uf?.nome,
      },
      regional: {
        id: placeOfSale.regional?.id,
        name: placeOfSale.regional?.nome,
      },
    })),
    price: dataSellableItems.valor,
  }
}
