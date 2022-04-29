
interface UseQueryParamsProps {
  uf: any[]
  citys: any[]
  name: string | null
  cnpj: string | null
  district: string | null
  specialtys: any[]
  status: any[]
  specialists: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/clinic-filter') || '{}',
  )

  const name = localStorageValues?.name

  const cnpj = localStorageValues?.cnpj

  const uf = localStorageValues?.uf

  const specialtys = localStorageValues?.specialtys

  const specialists = localStorageValues?.specialists

  const citys = localStorageValues?.citys

  const district = localStorageValues?.district

  const status = localStorageValues?.status

  return { uf, citys, name, cnpj, specialtys, specialists, district, status }
}
