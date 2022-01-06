import React, { useEffect, useState } from 'react'
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
  id: number
  code: string
  plano: string
  status: 'Ativo' | 'Inativo' | 'Em digitação' | 'Suspenso'
  outlets: string
  amount: string
}

interface sellableItem {
  id: number
  idPlano: number
  codigo: string
  nome: string
  status: 'Ativo' | 'Inativo' | 'Em digitação' | 'Suspenso'
  localVenda: string
  valor: string
  tipo: string
}

export const DataSellableItems: React.FC<DataSellableItemsProps> = ({
  filters,
  order,
}) => {
  const { Loading } = useLoading()
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const loadSellableItems = async () => {
      try {
        Loading.turnOn()

        const paramsToApi = await sellableItemsFiltersToApi(order, filters)

        const response = await apiPatient.get('/plano/itens-vendaveis', {
          params: paramsToApi,
        })

        setData(response.data.dados)
        // const sellableItemsMapped = fromApi()
      } catch (error) {
        toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadSellableItems()
  }, [order, filters])

  console.log(data)

  return (
    <Container>
      {data?.map((sellableItem: sellableItem, index: number) => (
        <ul key={index}>
          <li>{sellableItem.codigo || '-'}</li>
          <li>{sellableItem.nome || '-'}</li>
          <Status type={sellableItem.status}>
            <span>{sellableItem.status || '-'}</span>
          </Status>
          <li>{sellableItem.localVenda || '-'}</li>
          <li>
            <div>{sellableItem.valor || '-'}</div>
          </li>
          <Actions
            plan={{
              idPlan: sellableItem.idPlano,
              id: sellableItem.id,
              type: sellableItem.tipo,
            }}
          />
        </ul>
      ))}
      {!data.length && <h2>Nenhum resultado encontrado</h2>}
      <PaginationSimple />
    </Container>
  )
}
