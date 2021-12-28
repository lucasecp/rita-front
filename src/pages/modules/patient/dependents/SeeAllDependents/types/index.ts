export interface OrderI {
  name?: string
  value?: string
}

export interface DependentsI {
  total?: number
  data?: [
    {
      name?: string
      birthdate?: string
      cpf?: string
      status?: string
    },
  ]
}

type SetOrderI = (order: OrderI | Record<never, string>) => void

export interface TableProps {
  dependents: DependentsI
  order: OrderI
  setOrder: SetOrderI
}

export interface ContentProps {
  dependents: DependentsI
}

export interface ActionsProps {
  status: string
  idDependent: string
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrderI
}
