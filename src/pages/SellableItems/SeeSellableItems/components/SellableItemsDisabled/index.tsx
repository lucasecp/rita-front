import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { formatPrice } from '@/helpers/formatPrice'
import mapDataToMultSelect from './helpers/mapDataToMultSelect'
import {
  EDIT_SELLABLE_ITEMS,
  FILTER_SELLABLE_ITEMS,
} from '@/routes/constants/namedRoutes/routes'

import { useAuth } from '@/hooks/login'
import { useLoading } from '@/hooks/useLoading'

import ButtonPrimary from '@/components/Button/Primary'
import { RangeOfUse } from '@/components/RangeOfUse'
import CustomMultSelect from '@/components/Form/MultSelect'
import InputText from '@/components/Form/InputText'

import { FormItem } from './FormItem'
import { PlaceOfSale } from '../PlaceOfSale'

import { Container, ArrowLeft } from './styles'
import apiPatient from '@/services/apiPatient'

interface ResponseLocation {
  plan: {
    id: number
    idPlan: number
    type: string
  }
}

interface ResponseAPISellableItem {
  locaisVenda: PlaceOfSaleData[]
  valor: number
}

interface ResponseAPIPlan {
  codigo: string
  nome: string
  status: string
  descricao: string
  servicos: ServicesData[]
}

interface ServicesData {
  id: string
  nome: string
}

interface PlaceOfSaleData {
  city?: {
    id: number
    nome: string
  }[]
  uf?: {
    id: number
    sigla: string
    nome: string
  }
  regional: {
    id: number
    nome: string
  }
}

interface SellableItemsData {
  code: string
  name: string
  status: string
  description: string
  services: ServicesData[]
  placeOfSale: PlaceOfSaleData[]
  price: number
}

export const SellableItemsDisabled: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { plan } = useLocation<ResponseLocation>().state
  const auth = useAuth()
  const userPermissions = auth.user.permissoes
  const [sellableItemsData, setSellableItemsData] = useState(
    {} as SellableItemsData,
  )

  console.log(plan)

  const canEditSellableItems = userPermissions.includes(
    'EDITAR_ITENS_VENDAVEIS',
  )

  const sellableItemLocation = plan && {
    idItem: plan.id,
    idPlan: plan.idPlan,
    typeItem: plan.type,
  }

  useEffect(() => {
    const { idItem, idPlan, typeItem } = sellableItemLocation

    const getSellableItem = async () => {
      try {
        Loading.turnOn()

        console.log(typeItem === 'city' ? 'municipio' : typeItem)

        const responseSellableItem =
          await apiPatient.get<ResponseAPISellableItem>(
            `/itens-vendaveis/${idItem}`,
            {
              params: {
                idPlano: idPlan,
                tipo: typeItem === 'city' ? 'municipio' : typeItem,
              },
            },
          )

        const responsePlan = await apiPatient.get<ResponseAPIPlan>(
          `/plano/${idPlan}`,
        )

        const { locaisVenda, valor } = responseSellableItem.data
        const { codigo, nome, status, descricao, servicos } = responsePlan.data

        const setStatus: { [x: string]: string } = {
          I: 'Inativo',
          P: 'Em Digitação',
          A: 'Ativo',
          S: 'Suspenso',
        }

        const ajustedData = {
          code: codigo,
          name: nome,
          status: setStatus[status],
          description: descricao,
          services: servicos,
          placeOfSale: locaisVenda,
          price: valor,
        }

        setSellableItemsData(ajustedData)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    getSellableItem()
  }, [])

  return (
    <>
      <Container>
        <header>
          <ArrowLeft onClick={() => history.push(FILTER_SELLABLE_ITEMS)} />
          <p>Voltar à Filtragem</p>
        </header>
        <main>
          <p>
            Plano Base <span />
          </p>

          <>
            <FormItem
              label="Código - Nome:"
              value={`${sellableItemsData.code || 'Código'} - ${
                sellableItemsData.name || 'Nome'
              }`}
            />
            <FormItem label="Status" value={sellableItemsData.status} />
            <FormItem
              label="Descrição"
              value={sellableItemsData.description || 'Descrição'}
            />
            <CustomMultSelect
              disabled
              label="Serviços:"
              variation="secondary"
              value={mapDataToMultSelect(sellableItemsData.services)}
              setValue={() => console.log('')}
              options={[]}
            />
          </>

          <p>
            Local de Venda <span />
          </p>

          <PlaceOfSale places={sellableItemsData.placeOfSale} />

          <div id="containerInput">
            <InputText
              label="Valor:"
              value={formatPrice(sellableItemsData.price)}
              disabled
            />
          </div>
        </main>
        {canEditSellableItems && (
          <footer>
            <ButtonPrimary onClick={() => history.push(EDIT_SELLABLE_ITEMS)}>
              Editar
            </ButtonPrimary>
          </footer>
        )}
      </Container>
    </>
  )
}
