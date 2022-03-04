export const statusFromApi = (statusFromApi) => {
  const status = {
    P: 'PENDING',
    aVerificar: 'VERIFICATION',
    N: 'BLOCKED',
    negado: 'DANIED',
  }
  return status[statusFromApi] || ''
}

export const statusToApi = (statusFromApi) => {
  const status = {
    PENDING: 'P',
    VERIFICATION: 'aVerificar',
    BLOCKED: 'N',
    DANIED: 'negado',
  }
  return status[statusFromApi] || ''
}
