export interface OrderI {
  name?: string
  value?: string
}

export interface DependentsI {
  id?: number
  name?: string
  birthdate?: string
  cpf?: string
  status?: string
  isValidate?: boolean
  documentsOk?: boolean
}

type SetOrderI = (order: OrderI | Record<never, string>) => void

export interface TableProps {
  dependents: DependentsI[]
  order: OrderI
  setOrder: SetOrderI
}

export interface ContentProps {
  dependents: DependentsI[]
}

export interface ActionsProps {
  status?: string
  warning?: boolean
  idDependent?: number
  isValidate?: boolean
  documentsOk?: boolean
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrderI
}
