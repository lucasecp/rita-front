import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Pagination from '@/components/Pagination'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import { useAuth } from '@/hooks/login'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState } from 'react'
import { fromApi } from './adapters'
import ButtonIncluir from './Components/BottomCreate'
import Filter from './Filter'
import { Container, Content } from './styles'
import Table from './Table'
import { IScheduler } from './types'

const AppointmentSchedules: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState([])
  const [order, setOrder] = useState({})
  const { user } = useAuth()
  const [scheduler, setScheduler] = useState<IScheduler>({
    total: 0,
    data: [],
  })
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Agendamento de consultas'
    window.localStorage.removeItem('@Rita/SeeAllAppointmentScheduler')
  }, [])

  const getClinics = async () => {
    try {
      Loading.turnOn()
      const resultFirtTimeTotalData = window.localStorage.getItem(
        '@Rita/SeeAllAppointmentScheduler',
      )

      const { data } = await apiAdmin(
        `/clinica/${user.idClinica}/agenda-pessoal${queryApi}${
          queryFilterString(filters) + queryOrderString(order)
        }`,
      )
      if (!resultFirtTimeTotalData || resultFirtTimeTotalData === 'undefined') {
        window.localStorage.setItem(
          '@Rita/SeeAllAppointmentScheduler',
          JSON.stringify(data.length),
        )
      }
      setScheduler({
        total: resultFirtTimeTotalData || data.length,
        data: fromApi(data),
      })
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    getClinics()
  }, [queryApi, filters, order])

  return (
    <Container>
      <DefaultLayout
        title="Filtragem - Agendamentos de consulta"
        headerChildren={<ButtonIncluir />}
      >
        <Content>
          <Filter setFilters={setFilters} />
          <Table setOrder={setOrder} order={order} schedulers={scheduler} />
          <Pagination total={scheduler?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default AppointmentSchedules
