import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'
import ButtonHeader from './components/ButtonHeader'
import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'

export const SalableItems = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState([])
  const [order, setOrder] = useState({})
  const [plans, setPlans] = useState({})
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Itens Vendáveis'
    if (!queryApi) {
      return
    }

    const getPlans = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient(
          `/plano${queryApi}${
            queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setPlans(data)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    getPlans()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout title="Itens Vendáveis" headerChildren={<ButtonHeader />}>
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            plans={plans}
            setPlans={setPlans}
            setOrder={setOrder}
            order={order}
          />
          <Pagination
            total={plans?.total}
            setQuery={setQueryApi}
            restQuery={queryFilterString(filters) + queryOrderString(order)}
          />
        </Content>
      </DefaultLayout>
    </Container>
  )
}
