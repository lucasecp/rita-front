import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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

import { Container, ArrowLeft } from './styles'

interface ServicesData {
  id: string
  nome: string
}

interface PlaceOfSaleData {
  municipios: {
    id: string
    nome: string
  }
  regional: {
    id: string
    nome: string
  }
  uf: {
    id: string
    sigla: string
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
  const auth = useAuth()
  const userPermissions = auth.user.permissoes

  const canEditSellableItems = userPermissions.includes(
    'EDITAR_ITENS_VENDAVEIS',
  )

  const [sellableItemsData, setSellableItemsData] = useState(
    {} as SellableItemsData,
  )

  useEffect(() => {
    // Chamada a API
    const data = {
      code: 'PPR',
      name: 'Plano Vida +50',
      status: 'Ativo',
      description:
        'Plano Vida especialmente configurado para pessoas com mais de 50 anos da região Centro Oeste',
      services: [{ id: '1', nome: 'Consulta Dermatologista' }],
      placeOfSale: [
        {
          municipios: { id: '2', nome: 'Timbó' },
          regional: {
            id: '1',
            nome: 'Sul',
          },
          uf: {
            id: '10',
            sigla: 'SC',
            nome: 'Santa Catarina',
          },
        },
      ],
      price: 10,
    }

    setSellableItemsData(data)
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
