import useQuery from '@/hooks/useQuery'
import { fieldsApi } from '../../SeeAllSpecialtys/static/fieldsApi'

interface UseQueryParamsProps {
  type: string | null
  code: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/specialtys-types-filter') || '{}',
  )

  const type = localStorageValues?.type

  const code = localStorageValues?.code

  return { type, code }
}
