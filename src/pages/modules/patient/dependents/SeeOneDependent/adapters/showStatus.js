export const statusFromApi = (statusFromApi) => {
  const status = {
    P: 'PENDING',
    aVerificar: 'VERIFICATION',
    N: 'BLOCKED',
    negado: 'DANIED',
  }
  return status[statusFromApi] || ''
}
