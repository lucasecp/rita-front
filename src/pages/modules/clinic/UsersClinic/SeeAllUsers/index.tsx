import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Table from './Table'
import { Container, Content } from './styles'

import Pagination from '@/components/Pagination'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { fromApi } from './adapters'
import { UsersI } from './types'
import { queryFilterString } from '@/helpers/queryString/filter'
import { queryOrderString } from '@/helpers/queryString/order'
import ButtonHeader from './Components/ButtonHeader'
import { useAuth } from '@/hooks/login';

const SeeAllSpecialists: React.FC = () => {
  const [queryApi, setQueryApi] = useState('')
  const [filters, setFilters] = useState<any[]>([])
  const [order, setOrder] = useState({})
  const { user } = useAuth()
  const filterName = JSON.parse(
    window.localStorage.getItem('@Rita/clinic-users-filter'),
  )
  const [usersClinic, setUsersClinic] = useState<UsersI>({
    total: 0,
    data: [],
  })
  const { Loading } = useLoading()

  const getClinics = async (filter?: string) => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin(
        `/clinica/${user.idClinica}/usuario${queryApi}${
          queryFilterString(filters) + queryOrderString(order)
        }`,
      )

      const result = fromApi(
        filter
          ? data.users.filter((item) =>
              String(item.nome)
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase()),
            )
          : data.users,
      )

      setUsersClinic({
        total: result.length ? data.total : null,
        data: result,
      })
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    document.title = 'Rita Saúde | Usuários'
    if (!queryApi) {
      return
    }
    getClinics()
  }, [queryApi, filters, order])

  useEffect(() => {
    if (!filterName) getClinics()
    if (filterName) getClinics(filterName?.nome)
  }, [filterName?.nome])

  return (
    <Container>
      <DefaultLayout
        title="Clínica - Usuários"
        headerChildren={<ButtonHeader />}
      >
        <Content>
          <Filter setFilters={setFilters} />
          <Table setOrder={setOrder} order={order} users={usersClinic} />
          <Pagination total={usersClinic?.total} setQuery={setQueryApi} />
        </Content>
      </DefaultLayout>
    </Container>
  )
}

export default SeeAllSpecialists
