import useQuery from '@/hooks/useQuery'

interface UseQueryParams {
  uf: string | null
  city: string | null
  researchDoctor: string | null
  orderBy: string | null
  order: string | null
}

export default (): UseQueryParams => {
  const researchDoctor = useQuery().get('palavraChave')
  const city = useQuery().get('municipio')
  const uf = useQuery().get('uf')
  const orderBy = useQuery().get('orderBy')
  const order = useQuery().get('order')

  return { uf, city, researchDoctor, orderBy, order }
}
