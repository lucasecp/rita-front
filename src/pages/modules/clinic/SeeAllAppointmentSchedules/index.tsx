import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'
import ButtonIncluir from './Components/BottomCreate'
import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import { fromApi } from './adapters'
import { IScheduler } from './types'
import { useAuth } from '@/hooks/login'

const AppointmentSchedules: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const [makeRequest, setMakeRequest] = useState(0)
  const { user } = useAuth()
  const [scheduler, setScheduler] = useState<IScheduler>({
    total: 0, data: [],
  })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Agendamento de consultas'
    if (!queryApi) {
      return
    }

    const getClinics = async () => {
      try {
        Loading.turnOn()

        const { data } = await apiAdmin(
          `/clinica/${user.idClinica}/agenda-pessoal${queryApi}${queryFilterString(filters) + queryOrderString(order)
          }`,
        )
        setScheduler({ total: data.length, data: fromApi(data) })
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getClinics()
    console.log('queryApi', queryApi)
  }, [queryApi, filters, order, makeRequest])

  return (
    <Container>
      <DefaultLayout title="Filtragem - Agendamentos de consulta" headerChildren={<ButtonIncluir/>}>
        <Content>
          <Filter setFilters={setFilters} />
          <Table
            setOrder={setOrder}
            order={order}
            setMakeRequest={setMakeRequest}
            schedulers={scheduler}
          />
          <Pagination total={scheduler?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default AppointmentSchedules
