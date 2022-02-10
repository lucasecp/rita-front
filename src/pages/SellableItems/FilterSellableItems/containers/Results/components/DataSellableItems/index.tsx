import { useLoading } from '@/hooks/useLoading';
import apiAdmin from '@/services/apiAdmin';
import { toast } from '@/styles/components/toastify';
import qs from 'qs';
import React, { useEffect, useState } from 'react';

import {
  DataSellableItemsItem,
  OrderSellableItems,
  SellableItemsFilters,
} from '../../../../@types'
import { sellableItemsFromApi } from './adapters/fromApi';
import { sellableItemsToApi } from './adapters/toApi';
import Actions from './components/Actions';
import { PaginationSimple } from './components/PaginationSimple';
import { Container, Status } from './styles';

// import formatTextWithLimit from '@/helpers/formatTextWithLimit'
interface DataSellableItemsProps {
  filters: SellableItemsFilters
  order: OrderSellableItems
}

interface PaginationState {
  limit: number
  skip: number
}

export const DataSellableItems: React.FC<DataSellableItemsProps> = ({
  filters,
  order,
}) => {
  const { Loading } = useLoading()

  const [sellableItems, setSellableItems] = useState(
    [] as DataSellableItemsItem[],
  )

  const [pagination, setPagination] = useState({} as PaginationState)
  const [paginationTotal, setPaginationTotal] = useState(0)

  useEffect(() => {
    const loadSellableItems = async () => {
      try {
        Loading.turnOn()

        const paramsToApi = sellableItemsToApi(pagination, order, filters)

        const {
          data: { dados: data, total },
        } = await apiAdmin.get('/itens-vendaveis', {
          params: paramsToApi,
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' })
          },
        })

        setPaginationTotal(total)

        const sellableItemsMapped = sellableItemsFromApi(data)

        setSellableItems(sellableItemsMapped)
      } catch (error) {
        // console.log(error)
        toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadSellableItems()
  }, [pagination, order, filters])

  return (
    <Container>
      {sellableItems?.map((sellableItem, index) => (
        <ul key={index}>
          <li>{sellableItem.code || '-'}</li>
          <li>{sellableItem.plan.name || '-'}</li>
          <Status type={sellableItem.status}>
            <span>{sellableItem.status || '-'}</span>
          </Status>
          <li>{sellableItem.outlets || '-'}</li>
          <li>
            <div>{sellableItem.amount || '-'}</div>
          </li>
          <Actions
            plan={{
              idPlan: sellableItem.plan.id,
              id: sellableItem.id,
              outlets: sellableItem.outlets,
              name: sellableItem.plan.name,
              amount: sellableItem.amount,
              rangeOfUse: sellableItem.outlets,
              type: sellableItem.type,
            }}
          />
        </ul>
      ))}
      {!sellableItems?.length && <h2>Nenhum resultado encontrado</h2>}
      <PaginationSimple
        total={paginationTotal}
        onGetPagination={setPagination}
      />
    </Container>
  )
}
