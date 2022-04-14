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
import { IssuingAgencyI } from './types'
import ButtonHeader from './Components/ButtonHeader'

const IssuingAgency: React.FC = () => {
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [issuingAgency, setIssuingAgency] = useState<IssuingAgencyI[]>([])

  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Órgão Emissor'
  }, [])

  useEffect(() => {
    const getAgency = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin(
          `/orgao-emissor?${
            queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setIssuingAgency(fromApi(data))
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getAgency()
  }, [filters, order])

  return (
    <Container>
      <DefaultLayout
        title="Gestão de Órgão Emissor"
        headerChildren={<ButtonHeader />}
      >
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            issuingAgency={issuingAgency}
            setIssuingAgency={setIssuingAgency}
            setOrder={setOrder}
            order={order}
          />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default IssuingAgency
