import useQuery from '@/hooks/useQuery'
import { fieldsApi } from '../static/fieldsApi'

interface UseQueryParamsProps {
  name: string | null
  code: string | null
  subscriptionRequired: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/specialty-filter') || '{}',
  )

  const name = localStorageValues?.name

  const code = localStorageValues?.code

  const subscriptionRequired = localStorageValues?.subscriptionRequired

  return { name, code, subscriptionRequired }
}
