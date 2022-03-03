export type StatusUsers = 'Ativo' | 'Inativo'

export interface UsersFilters {
  name: string | undefined
  login: string | undefined
  profiles: {
    id: number
    name: string
  }[]
  status: {
    id: number
    name: StatusUsers
  }[]
}

export interface User {
  id: number
  name: string
  login: string
  blocked: string
  profile: string
  status: string
}

export interface OrderUsers {
  name: 'name' | 'login' | 'status'
  value: 'ascending' | 'descending' | undefined
}
