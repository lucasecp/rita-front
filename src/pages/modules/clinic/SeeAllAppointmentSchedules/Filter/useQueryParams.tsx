interface UseQueryParamsProps {
  name: string | null
  cpf: string | null
  registerNumber: string | null
  specialtys: any[]
  status: any[]
  issuingAgency: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/clinic-filter') || '{}',
  )

  const name = localStorageValues?.name

  const cpf = localStorageValues?.cpf

  const registerNumber = localStorageValues?.registerNumber

  const specialtys = localStorageValues?.specialtys

  const issuingAgency = localStorageValues?.issuingAgency

  const status = localStorageValues?.status

  return { registerNumber, status, name, cpf, specialtys, issuingAgency }
}
