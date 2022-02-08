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
import { ClinicI } from './types'

const SeeAllClinics: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [clinics, setClinics] = useState<ClinicI>({ total: 0, data: [] })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Clínicas'
    if (!queryApi) {
      return
    }

    const getClinics = async () => {
      const ordertoApi = Object.keys(order).length
        ? order
        : {
            name: 'status',
            value: 'ASC',
          }

      try {
        Loading.turnOn()
        const { data } = await apiAdmin(
          `/clinica${queryApi}${
            queryFilterString(filters) + queryOrderString(ordertoApi)
          }`,
        )
        setClinics({ total: data.total, data: fromApi(data.clinicas) })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinics()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout title="Clínicas">
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            clinics={clinics}
            setClinics={setClinics}
            setOrder={setOrder}
            order={order}
          />
          <Pagination total={clinics?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllClinics
