import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'

import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'

const SeeAllClinics = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState([])
  const [order, setOrder] = useState({})
  const [clinics, setClinics] = useState({ total: 0 })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Clínicas'
    if (!queryApi) {
      return
    }

    const getClinics = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient(
          `/clinica${queryApi}${
            queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setClinics(data)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinics()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout title="Gestão de Planos">
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            clinics={clinics}
            setClinics={setClinics}
            setOrder={setOrder}
            order={order}
          />
          <Pagination
            total={clinics?.total}
            setQuery={setQueryApi}
            restQuery={queryFilterString(filters) + queryOrderString(order)}
          />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllClinics
