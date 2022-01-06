import React, { useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { IncludeButton } from './components/IncludeButton'
import { Filter } from './containers/Filter'
import { Container } from './styles'
import { Results } from './containers/Results'
import Pagination from '@/components/Pagination'
// import { queryFilterString } from '@/helpers/queryString/filter'
// import { queryOrderString } from '@/helpers/queryString/order'
import { SellableItemsFilters } from './@types'

export const FilterSellableItems: React.FC = () => {
  // const { Loading } = useLoading()

  const [filters, setFilters] = useState({} as SellableItemsFilters)
  // const [queryApi, setQueryApi] = useState('')
  // const [order, setOrder] = useState({})
  // const [plans, setPlans] = useState({})

  // useEffect(() => {
  //   document.title = 'Rita Saúde | Itens Vendáveis'
  // if (!queryApi) {
  //   return
  // }

  //   const getPlans = async () => {
  //     try {
  //       Loading.turnOn()
  //       const { data } = await apiPatient(
  //         `/plano${queryApi}${
  //           queryFilterString(filters) + queryOrderString(order)
  //         }`,
  //       )
  //       setPlans(data)
  //     } catch ({ response }) {
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }
  //   getPlans()
  // }, [queryApi, filters, order])

  return (
    <DefaultLayout title="Itens Vendáveis" headerChildren={<IncludeButton />}>
      <Container>
        <Filter setFilters={setFilters} />
        <Results filters={filters} />
      </Container>
    </DefaultLayout>
  )
}
