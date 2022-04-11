export const statusFromApi = (statusFromApi: string): string => {
  const status = {
    P: 'PENDING',
    aVerificar: 'VERIFICATION',
    N: 'BLOCKED',
    negado: 'DANIED',
  }
  return status[statusFromApi] || ''
}
