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
  isAMinor?: boolean
}

export interface DataDependentI {
  holder: HolderI
  dependents: DependentI[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  dependents: DataDependentI
  hidden: boolean
  setStep: (step: number) => void
}

export interface ContentProps {
  dependents: DataDependentI
  setStep: (step: number) => void
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
