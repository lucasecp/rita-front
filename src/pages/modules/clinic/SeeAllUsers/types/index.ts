interface OrderI {
  name?: string
  value?: string
}

export interface DataUsersClinic {
  idClinica: number
  idUsuario: number
  nome: string
  email: string
  perfil: any[]
}

export interface UsersI {
  total: number
  data?: DataUsersClinic[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  users: UsersI
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  users: UsersI
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
