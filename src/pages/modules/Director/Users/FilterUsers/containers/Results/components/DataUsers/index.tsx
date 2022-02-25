import apiUser from '@/services/apiUser'
import { useState, useEffect } from 'react'
import { OrderUsers, UsersFilters, User } from '../../../../@types'
import { Actions } from './components/Actions'
import { fromApi } from './adapters/fromApi'
import { paramsToApiGetUsers } from './adapters/toApi'
import { PaginationSimple } from './components/PaginationSimple'
import { Container, Status } from './styles'
import qs from 'qs'
import { useLoading } from '@/hooks/useLoading'

interface DataUsersProps {
  filters: UsersFilters
  order: OrderUsers
}

interface PaginationState {
  limit: number
  skip: number
}

export const DataUsers: React.FC<DataUsersProps> = ({ filters, order }) => {
  const { Loading } = useLoading()

  const [usersData, setUsersData] = useState<User[]>([])

  const [pagination, setPagination] = useState({} as PaginationState)
  const [paginationTotal, setPaginationTotal] = useState(0)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        Loading.turnOn()

        const paramsToApi = paramsToApiGetUsers(pagination, order, filters)

        console.log('paramsToApi: ', paramsToApi)

        const {
          data: { total, dados },
        } = await apiUser.get('/usuario', {
          params: paramsToApi,
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' })
          },
        })

        setPaginationTotal(total)

        const usersMapped = fromApi(dados)

        setUsersData(usersMapped)
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        Loading.turnOff()
      }
    }

    loadUsers()
  }, [pagination, order, filters])

  return (
    <Container>
      {usersData.map((user, index) => (
        <ul key={index}>
          <li>{user.name || '-'}</li>
          <li>{user.cpf || '-'}</li>
          <li>{user.profile || '-'}</li>
          <Status type={user.status}>
            <span>{user.status || '-'}</span>
          </Status>
          <li>{user.blocked || '-'}</li>
          <Actions userData={user} />
        </ul>
      ))}
      {!usersData?.length && <h2>Nenhum resultado encontrado</h2>}
      <PaginationSimple
        total={paginationTotal}
        onGetPagination={setPagination}
      />
    </Container>
  )
}
