import React, { useEffect } from 'react'
import { Container, Status } from './styles'
import Actions from './components/Actions'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { SellableItemsFilters } from '../../../../@types'
import { sellableItemsFiltersToApi } from './adapters/toApi'
import { PaginationSimple } from './components/PaginationSimple'
// import formatTextWithLimit from '@/helpers/formatTextWithLimit'

interface DataSellableItemsProps {
  filters: SellableItemsFilters
  order: {
    name: string
    value: string
  }
}

interface DataSellableItemsItem {
  id: 1
  code: string
  plan: string
  status: 'Ativo' | 'Inativo' | 'Em digitação' | 'Suspenso'
  outlets: string
  amount: string
}

export const DataSellableItems: React.FC<DataSellableItemsProps> = ({
  filters,
  order,
}) => {
  const { Loading } = useLoading()

  // useEffect(() => {
  //   const loadSellableItems = async () => {
  //     try {
  //       Loading.turnOn()

  //       const paramsToApi = sellableItemsFiltersToApi(order, filters)

  //       const { data } = await apiPatient.get('/plano/itens-vendaveis', {
  //         params: paramsToApi,
  //       })

  //       console.log(data)
  //       // const sellableItemsMapped = fromApi()
  //     } catch (error) {
  //       toast.error('Erro ao carregar itens vendáveis!')
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }

  //   loadSellableItems()
  // }, [order, filters])

  const sellableItems: DataSellableItemsItem[] = [
    {
      id: 1,
      code: 'CÓDIGO',
      plan: 'Plano Vida',
      status: 'Inativo',
      outlets: 'Sudeste',
      amount: 'R$ 99,90',
    },
  ]

  return (
    <Container>
      {sellableItems?.map((sellableItem, index) => (
        <ul key={index}>
          <li>{sellableItem.code || '-'}</li>
          <li>{sellableItem.plan || '-'}</li>
          <Status type={sellableItem.status}>
            <span>{sellableItem.status || '-'}</span>
          </Status>
          <li>{sellableItem.outlets || '-'}</li>
          <li>
            <div>{sellableItem.amount || '-'}</div>
          </li>
          <Actions />
        </ul>
      ))}
      {!sellableItems.length && <h2>Nenhum resultado encontrado</h2>}
      <PaginationSimple />
    </Container>
  )
}
