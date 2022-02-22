import { OrderSellableItems, SellableItemsFilters } from '../../../../@types'
import { Actions } from './components/Actions'
import { Container, Status } from './styles'

// import formatTextWithLimit from '@/helpers/formatTextWithLimit'
interface DataSellableItemsProps {
  filters: SellableItemsFilters
  order: OrderSellableItems
}

export const DataUsers: React.FC<DataSellableItemsProps> = () => {
  const usersData = [
    {
      nome: 'Arthur Felipe Gramm',
      cpf: '102.477.339-62',
      blocked: 'Sim',
      profile: 'Dev Front',
      status: 'Ativo',
    },
    {
      nome: 'Arthur Felipe Gramm',
      cpf: '102.477.339-62',
      blocked: 'Não',
      profile: 'Dev Front',
      status: 'Ativo',
    },
    {
      nome: 'Arthur Felipe Gramm',
      cpf: '102.477.339-62',
      blocked: 'Sim',
      profile: 'Dev Front',
      status: 'Ativo',
    },
  ]

  return (
    <Container>
      {usersData.map((user, index) => (
        <ul key={index}>
          <li>{user.nome || '-'}</li>
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
      {/* <PaginationSimple
        total={paginationTotal}
        onGetPagination={setPagination}
      /> */}
    </Container>
  )
}
