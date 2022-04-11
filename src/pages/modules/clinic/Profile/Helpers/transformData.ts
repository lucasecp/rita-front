import { MultiSelectOption } from '@/components/Form/MultSelect'

export const mapSpecialtys = (specialtys: any[]): MultiSelectOption[] => {
  return specialtys.map((item) => ({
    id: item.id,
    name: item.descricao,
  }))
}

export const mapToApiSpecialtys = (specialtys: any[]): any[] => {
  return specialtys.map((item) => ({
    idEspecialidade: item.id,
  }))
}

/** @description Remove os IDs que estiverem com valor null e retorna os dados com id e name */
export const filterAllSpecialtys = (specialtys: any[]): MultiSelectOption[] => {
  const result = specialtys
    .filter((item) => item.id)
    .map((item) => ({
      id: item.id,
      name: item.descricao,
    }))
  return [{ id: 0, name: 'Todos' }, ...result]
}
