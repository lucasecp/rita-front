type StatusFromApi = 'I' | 'P' | 'A' | 'N'

export const showStatus = (status: StatusFromApi): string => {
  const formatedStatus = {
    I: 'Inativo',
    P: 'Pendente',
    A: 'Ativo',
    N: 'Negado',
  }
  return formatedStatus[status] || ''
}

// export const statusToApi = (statusFromApi) => {
//   const status = {
//     PENDING: 'P',
//     VERIFICATION: 'aVerificar',
//     BLOCKED: 'bloqueado',
//     DENIED: 'negado',
//   }
//   return status[statusFromApi] || ''
// }
