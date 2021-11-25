import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'
import ButtonHeader from './Components/ButtonHeader'
import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'

const PlanManagment = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState([])
  const [order, setOrder] = useState({})
  const [plans, setPlans] = useState({})
  const { Loading } = useLoading()

  useEffect(() => {
    
    if (!queryApi) {
      return
    }

    const getPlans = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient(`/plano${queryApi}`)
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
      <DefaultLayout title="Gestão de Planos" headerChildren={<ButtonHeader />}>
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

export default PlanManagment
