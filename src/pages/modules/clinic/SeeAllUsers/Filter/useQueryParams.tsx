
interface UseQueryParamsProps {
  nome: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/clinic-filter') || '{}',
  )

  const nome = localStorageValues?.nome

  return { nome }
}
