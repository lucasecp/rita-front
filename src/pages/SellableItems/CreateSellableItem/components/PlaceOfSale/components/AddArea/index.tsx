import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { RegionalSelect } from './components/RegionalSelect'
import { UfSelect } from './components/UfSelect'
import { CitiesMultiSelect } from './components/CitiesMultiSelect'
import { useLoading } from '@/hooks/useLoading'
import { PlaceOfSale } from '../..'
import { toast } from '@/styles/components/toastify'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import { useMessage } from '@/hooks/useMessage'
import { onePlaceOfSaleToApi } from '../../../../adapters/toApi'
import { placeOfSaleFromApi } from '../../../../adapters/fromApi'

interface AddAreaProps {
  idPlan: number
  placeOfSale: PlaceOfSale[]
  onGetPlaceOfSale: (placeOfSale: PlaceOfSale[]) => void
}

export const AddArea: React.FC<AddAreaProps> = ({
  idPlan,
  placeOfSale,
  onGetPlaceOfSale,
}) => {
  const [regional, setRegional] = useState<string | number>('')
  const [clearRegional, sendClearRegional] = useMessage()

  const [uf, setUf] = useState<string | number>('')

  const [cities, setCities] = useState<MultiSelectOption[]>([])

  const { Loading } = useLoading()

  const onAddArea = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiAdmin.post(
        '/itens-vendaveis/local-venda',
        onePlaceOfSaleToApi(idPlan, regional, uf, cities, placeOfSale),
      )
      const placeOfSaleMapped = placeOfSaleFromApi(data)

      onGetPlaceOfSale(placeOfSaleMapped)

      sendClearRegional()
      setUf('')
      setCities([])
    } catch ({ response }) {
      return toast.error('Seleção fora da abrangência do plano')
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    sendClearRegional()
    setUf('')
    setCities([])
  }, [idPlan])

  return (
    <Container>
      <section>
        <RegionalSelect
          idPlan={idPlan}
          placeOfSale={placeOfSale}
          clearRegional={clearRegional}
          onGetRegional={setRegional}
        />
        <UfSelect
          idPlan={idPlan}
          placeOfSale={placeOfSale}
          regional={regional}
          onGetUf={setUf}
        />
        <CitiesMultiSelect
          idPlan={idPlan}
          uf={uf}
          placeOfSale={placeOfSale}
          onGetCities={setCities}
        />
      </section>
      <ButtonPrimary disabled={!regional && !uf} onClick={onAddArea}>
        Adicionar
      </ButtonPrimary>
    </Container>
  )
}
