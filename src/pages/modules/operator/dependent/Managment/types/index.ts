interface OrderI {
  name?: string
  value?: string
}

export interface DataDependentI {
  cpf: string
  name: string
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  dependents: DataDependentI[]
}

export interface ContentProps {
  dependents: DataDependentI[]
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
