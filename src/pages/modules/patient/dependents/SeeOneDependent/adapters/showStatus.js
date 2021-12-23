export const statusFromApi = (statusFromApi) => {
  const status = {
    P: 'PENDING',
    aVerificar: 'VERIFICATION',
    bloqueado: 'BLOCKED',
    negado: 'DANIED',
  }
  return status[statusFromApi] || ''
}

export const statusToApi = (statusFromApi) => {
  const status = {
    PENDING: 'P',
    VERIFICATION: 'aVerificar',
    BLOCKED: 'bloqueado',
    DANIED: 'negado',
  }
  return status[statusFromApi] || ''
}
