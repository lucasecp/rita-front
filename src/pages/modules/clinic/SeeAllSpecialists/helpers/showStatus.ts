import { StatusFromApi } from '../types'

export const showStatus = (status: StatusFromApi): string => {
  const formatStatus = {
    I: 'Inativo',
    P: 'Pendente',
    A: 'Ativo',
    N: 'Negado',
  }

  return formatStatus[status] || ''
}
