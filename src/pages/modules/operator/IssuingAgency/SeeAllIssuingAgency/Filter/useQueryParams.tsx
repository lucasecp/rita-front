// import useQuery from '@/hooks/useQuery'
// import { fieldsApi } from '../../SeeAllSpecialtys/static/fieldsApi'

interface UseQueryParamsProps {
  issuingAgency: string | null
  specialist: string | null
  status: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/specialtys-types-filter') || '{}',
  )

  const issuingAgency = localStorageValues?.issuingAgency

  const specialist = localStorageValues?.specialist

  const status = localStorageValues?.status

  return { issuingAgency, specialist, status }
}
