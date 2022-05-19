/* eslint-disable prettier/prettier */
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Pagination from '@/components/Pagination'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { fromApi } from './adapters'
import Filter from './Filter'
import { Container, Content } from './styles'
import Table from './Table'
import { PendenciesCsdI } from './types'

const AppointmentSchedules: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState([])
  const [order, setOrder] = useState({})
  const [dataCSD, setDataCSD] = useState<PendenciesCsdI>({
    total: 0,
    data: [],
  })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Atendimentos CSD'
  }, [])

  useEffect(() => {
    const getClinics = async () => {
      try {
        Loading.turnOn()

        const { data } = await apiPatient(
          `/atendimento${queryApi}${queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setDataCSD({ total: data?.total, data: fromApi(data?.atendimentos) })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinics()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout title="Filtragem - Atendimentos CSD">
        <Content>
          <Filter setFilters={setFilters} />
          <Table setOrder={setOrder} order={order} data={dataCSD} />
          <Pagination total={dataCSD?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default AppointmentSchedules
