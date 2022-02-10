export interface HolderI {
  id?: string
  name?: string
  cpf?: string
  plan?: string
}

export interface DependentI {
  id?: string
  name?: string
  cpf?: string
  isAHolder?: boolean
  status?: string
  holder?: HolderI
}
