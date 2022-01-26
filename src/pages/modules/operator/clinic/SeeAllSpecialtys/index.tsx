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
import { fromApi } from './adapters'
import { SpecialtyI } from './types'
import ButtonHeader from './Components/ButtonHeader'

const SeeAllSpecialtys: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [specialtys, setSpecialtys] = useState<SpecialtyI>({
    total: 0,
    data: [],
  })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Especialidades'
    if (!queryApi) {
      return
    }

    const getSpecialtys = async () => {
      const ordertoApi = Object.keys(order).length
        ? order
        : {
            name: 'descricao',
            value: 'ASC',
          }

      try {
        Loading.turnOn()
        const { data } = await apiPatient(
          `/especialidade${queryApi}${
            queryFilterString(filters) + queryOrderString(ordertoApi)
          }`,
        )
        setSpecialtys({ total: data.total, data: fromApi(data.especialidade) })
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getSpecialtys()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout title="Especialidades" headerChildren={<ButtonHeader />}>
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            specialtys={specialtys}
            setSpecialtys={setSpecialtys}
            setOrder={setOrder}
            order={order}
          />
          <Pagination total={specialtys?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllSpecialtys
