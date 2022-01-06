import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { formatPrice } from '@/helpers/formatPrice'
import mapDataToMultSelect from './helpers/mapDataToMultSelect'
import mapToRangeOfUse from './helpers/mapToRangeOfUse'
import {
  EDIT_SELLABLE_ITEMS,
  FILTER_SELLABLE_ITEMS,
} from '@/routes/constants/namedRoutes/routes'

import { useAuth } from '@/hooks/login'

import ButtonPrimary from '@/components/Button/Primary'
import { RangeOfUse } from '@/components/RangeOfUse'
import CustomMultSelect from '@/components/Form/MultSelect'
import InputText from '@/components/Form/InputText'

import { FormItem } from './FormItem'
import { PlaceOfSale } from '../PlaceOfSale'

import { Container, ArrowLeft } from './styles'
import apiPatient from '@/services/apiPatient'

interface ServicesData {
  id: string
  nome: string
}

interface PlaceOfSaleData {
  city?: {
    id: string
    label: string
  }
  uf?: {
    id: string
    sigla: string
    label: string
  }
  regional: {
    id: string
    label: string
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
  // const location = useLocation().state
  const id = 57
  const auth = useAuth()
  const userPermissions = auth.user.permissoes

  const canEditSellableItems = userPermissions.includes(
    'EDITAR_ITENS_VENDAVEIS',
  )

  const [sellableItemsData, setSellableItemsData] = useState(
    {} as SellableItemsData,
  )

  useEffect(() => {
    const getSellableItem = async () => {
      const response = await apiPatient.get(`/itens-vendaveis/2`, {
        params: {
          idPlano: 80,
          tipo: 'regional',
        },
      })

      console.log(response.data)

      const data = {
        code: 'PPR',
        name: 'Plano Vida +50',
        status: 'Ativo',
        description:
          'Plano Vida especialmente configurado para pessoas com mais de 50 anos da região Centro Oeste',
        services: [{ id: '1', nome: 'Consulta Dermatologista' }],
        placeOfSale: [
          {
            city: { id: '2', label: 'Timbó' },
            regional: {
              id: '1',
              label: 'Sul',
            },
            uf: {
              id: '10',
              sigla: 'SC',
              label: 'Santa Catarina',
            },
          },
          {
            regional: {
              id: '1',
              label: 'Sul',
            },
            uf: {
              id: '10',
              sigla: 'SC',
              label: 'Santa Catarina',
            },
            city: { id: '1', label: 'Blumenau' },
          },
        ],
        price: 10,
      }

      // setSellableItemsData(response.data)
      setSellableItemsData(data)
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

          <FormItem
            label="Código - Nome:"
            value={`${sellableItemsData.code} - ${sellableItemsData.name}`}
          />
          <FormItem label="Status" value={sellableItemsData.status} />
          <FormItem label="Descrição" value={sellableItemsData.description} />

          <CustomMultSelect
            disabled
            label="Serviços:"
            variation="secondary"
            value={mapDataToMultSelect(sellableItemsData.services)}
            setValue={() => console.log('')}
            hasError={false}
            messageError=""
            options={[]}
          />

          <p>
            Local de Venda <span />
          </p>

          <PlaceOfSale places={sellableItemsData.placeOfSale} />

          <RangeOfUse
            rangesOfUse={mapToRangeOfUse(sellableItemsData.placeOfSale)}
            viewMode
          />

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
