import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import apiAdmin from '@/services/apiAdmin'
import { Container } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import OutilineButton from '@/components/Button/Outline'
import { MultSelectServices } from './components/MultSelectServices'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { toast } from '@/styles/components/toastify'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import { PlaceOfSale, PlaceOfSaleComponent } from './components/PlaceOfSale'
import { InputCurrency } from './components/InputCurrency'
import { AutocompletePlan } from './components/AutocompletePlan'
import { CancelSaving } from './messages/CancelSaving'
import { sellableItemToApi } from './adapters/toApi'

export const CreateSellableItem: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [plan, setPlan] = useState<AutocompleteOptions>({
    value: 0,
    label: '',
  })

  const [fieldWasChanged, setFieldWasChanged] = useState<number>(0)

  const [priceError, setPriceError] = useState<string>('')
  const [planIdError, setPlanIdError] = useState<string>('')
  const [rangesOfUseError, setRangesOfUseError] = useState(false)

  const [price, setPrice] = useState<string>('0')
  const [placeOfSale, setPlaceOfSale] = useState<PlaceOfSale[]>([])

  useEffect(() => {
    setFieldWasChanged(fieldWasChanged + 1)
  }, [placeOfSale, price, plan.value])

  useEffect(() => {
    setPlaceOfSale([])
  }, [plan.value])

  const onSave = async () => {
    if (!placeOfSale.length) {
      setRangesOfUseError(true)
    } else {
      setRangesOfUseError(false)
    }

    if (Number(price) < 0.01) {
      setPriceError('O valor é obrigatório')
    } else {
      setPriceError('')
    }

    if (!plan.value) {
      setPlanIdError('O plano é obrigatório')
    } else {
      setPlanIdError('')
    }

    if (!placeOfSale.length || price.length < 3 || price === '0' || !plan.value)
      return scrollTo(0, 0)

    try {
      Loading.turnOn()

      const sellableItemsMapped = sellableItemToApi({
        plan,
        price: price,
        placeOfSale: placeOfSale,
      })

      await apiAdmin.post('itens-vendaveis', sellableItemsMapped)

      toast.success('Cadastro realizado com sucesso.')
      history.push(FILTER_SELLABLE_ITEMS)
    } catch ({ response }) {
      toast.error('Erro ao tentar salvar')
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (fieldWasChanged > 2) {
      return showMessage(CancelSaving)
    }
    history.push(FILTER_SELLABLE_ITEMS)
  }

  return (
    <DefaultLayout title="Itens Vendáveis - Cadastro">
      <Container>
        <main>
          <AutocompletePlan
            onGetPlan={setPlan}
            error={!plan.value ? planIdError : ''}
          />
          <MultSelectServices plan={plan} />
          <PlaceOfSaleComponent
            idPlan={plan.value}
            hasError={rangesOfUseError}
            placeOfSale={placeOfSale}
            setPlaceOfSale={setPlaceOfSale}
          />
          <div id="containerInput">
            <InputCurrency
              label="Valor:"
              required
              value={price}
              setValue={setPrice}
              messageError={priceError}
              hasError={!!priceError}
            />
          </div>
        </main>

        <footer>
          <OutilineButton onClick={onCancel}>Cancelar</OutilineButton>
          <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
