import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, ArrowLeft } from './styles'
import apiAdmin from '@/services/apiAdmin'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import mapDataToMultSelect from './helpers/mapDataToMultSelect'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'

import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CustomMultSelect from '@/components/Form/MultSelect'
import InputCurrency from '../InputCurrency'
import { DeleteModal } from './messages/DeleteModal'
import { CancelSaving } from './messages/CancelSaving'
import { ConfirmPriceChange } from './messages/ConfirmPriceChange'
import { FormItem } from './FormItem'
import { PlaceOfSale } from '../PlaceOfSale'
import { toast } from 'react-toastify'

interface Plan {
  amount: string
  id: number
  idPlan: number
  name: string
  outlets: string
  rangeOfUse: string
  type: string
}

interface ResponseLocation {
  plan: Plan
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

export const SellableItems: React.FC<Plan> = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  const { plan } = useLocation<ResponseLocation>().state

  const [sellableItemsData, setSellableItemsData] = useState<SellableItemsData>(
    {
      code: 'Código',
      description: 'Descrição',
      name: 'Nome',
      placeOfSale: [],
      price: 0,
      services: [],
      status: '',
    },
  )
  const [priceError, setPriceError] = useState('')
  const [priceToSave, setPriceToSave] = useState<number | string>(0.0)
  const [fieldWasChanged, setFieldWasChanged] = useState<number>(0)

  useEffect(() => {
    const getSellableItem = async () => {
      try {
        Loading.turnOn()

        const responseSellableItem =
          await apiAdmin.get<ResponseAPISellableItem>(
            `/itens-vendaveis/${plan.id}`,
            {
              params: {
                idPlano: plan.idPlan,
                tipo: plan.type === 'city' ? 'municipio' : plan.type,
              },
            },
          )

        const responsePlan = await apiAdmin.get<ResponseAPIPlan>(
          `/plano/${plan.idPlan}`,
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

    setPriceToSave(
      plan.amount.replace('R', '').replace('$', '').replace(' ', ''),
    )
  }, [])

  useEffect(() => {
    setFieldWasChanged(fieldWasChanged + 1)
  }, [priceToSave])

  const onSave = async () => {
    if (fieldWasChanged < 2) {
      history.push(FILTER_SELLABLE_ITEMS)
      toast.success('Nenhuma alteração realizada.')
      return
    }
    if (priceToSave < 0.01) {
      return setPriceError('O valor é obrigatório')
    }
    setPriceError('')
    showMessage(ConfirmPriceChange, { sellableItemsData, priceToSave, plan })
  }

  const onCancel = () => {
    if (fieldWasChanged > 2) {
      return showMessage(CancelSaving)
    }
    history.push(FILTER_SELLABLE_ITEMS)
  }

  const toDeleteSellableItem = async () => {
    try {
      Loading.turnOn()

      showMessage(DeleteModal, {
        plan,
      })
    } catch (err) {
      console.log(err)
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <>
      <Container>
        <header onClick={() => history.push(FILTER_SELLABLE_ITEMS)}>
          <ArrowLeft />
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
          />

          <p>
            Local de Venda <span />
          </p>

          <PlaceOfSale places={sellableItemsData.placeOfSale} />

          <div id="containerInput">
            <InputCurrency
              label="Valor:"
              required
              defaultValue={plan.amount}
              setValue={setPriceToSave}
              messageError={priceError}
              hasError={!!priceError}
            />
          </div>
        </main>
        <footer>
          <OutilineButton onClick={onCancel}>Cancelar</OutilineButton>
          <OutilineButton variation={'red'} onClick={toDeleteSellableItem}>
            Excluir
          </OutilineButton>
          <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </>
  )
}
