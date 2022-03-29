import React, { useEffect, useState } from 'react'

import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { PlaceOfSale } from '../../../..'
import { placeOfSaleToApi } from '../../../../../../adapters/toApi'

interface CitiesMultiSelectProps {
  uf: string | number
  placeOfSale: PlaceOfSale[]
  onGetCities: (cities: MultiSelectOption[]) => void
}

export const CitiesMultiSelect: React.FC<CitiesMultiSelectProps> = ({
  uf,
  placeOfSale,
  onGetCities,
}) => {
  const { Loading } = useLoading()

  const [cityOptions, setCityOptions] = useState([])
  const [cities, setCities] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    const loadCities = async () => {
      if (uf !== '' || 0) {
        try {
          Loading.turnOn()

          const { data } = await apiAdmin.post(
            `/itens-vendaveis/municipio?uf=${uf}`,
            placeOfSaleToApi(placeOfSale),
          )

          const rangesOfUseMapped = data?.map(
            (cityFromApi: { descricao: string; idMunicipio: number }) => {
              return {
                name: cityFromApi.descricao,
                id: cityFromApi.idMunicipio,
              }
            },
          )

          setCityOptions(rangesOfUseMapped)
        } catch (error) {
          console.log(error)
        } finally {
          Loading.turnOff()
        }
      }
    }
    loadCities()
  }, [uf])

  useEffect(() => {
    onGetCities(cities)
  }, [cities])

  useEffect(() => {
    setCities([])
  }, [uf])

  return (
    <CustomMultSelect
      options={cityOptions}
      label="Cidade(s):"
      value={cities}
      setValue={setCities}
      variation="secondary"
      disabled={uf === '' || uf === 0}
    />
  )
}
