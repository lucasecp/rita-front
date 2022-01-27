interface OrderI {
  name?: string
  value?: string
}
export interface HolderI {
  id?: string
  cpf?: string
  name?: string
  plan?: string
}
interface DependentI {
  id?: string
  cpf?: string
  name?: string
}

export interface DataDependentI {
  holder: HolderI
  dependents: DependentI[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  dependents: DataDependentI
  hidden: boolean
}

export interface ContentProps {
  dependents: DataDependentI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
