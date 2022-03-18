import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'

import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import { fromApi } from './adapters'
import { SpecialistI } from './types'

const SeeAllSpecialists: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [makeRequest, setMakeRequest] = useState(0)
  const [specialists, setSpecialists] = useState<SpecialistI>({
    total: 0,
    data: [],
  })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Especialistas'
    if (!queryApi) {
      return
    }

    const getClinics = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin(
          `/clinica/${59}/medico${queryApi}${
            queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setSpecialists({ total: data.total, data: fromApi(data.medicos) })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinics()
  }, [queryApi, filters, order, makeRequest])

  return (
    <Container>
      <DefaultLayout title="Especialistas - Filtragem">
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            setOrder={setOrder}
            order={order}
            setMakeRequest={setMakeRequest}
            specialists={specialists}
          />
          <Pagination total={specialists?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllSpecialists
