import React, { useEffect, useState } from 'react'

import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'

import { Container } from './styles'
import apiAdmin from '@/services/apiAdmin'
import { citiesFromApi } from './adapters/fromApi'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

export const CityAutocomplete: React.FC = () => {
  const { region } = usePhysicalPersonRegister()

  const [city, setCity] = useState({} as AutocompleteOptions)
  const [cities, setCities] = useState([] as AutocompleteOptions[])

  useEffect(() => {
    const loadCities = async () => {
      try {
        const { data } = await apiAdmin.get('/municipio', {
          params: {
            descricao: city?.label,
          },
        })

        const citiesMapped = citiesFromApi(data)

        setCities(citiesMapped)
      } catch (error) {
        console.log(error)
      }
    }

    if (city?.label?.length > 2) {
      loadCities()
    }

    if (city?.value) {
      const [citySelected, ufSelected] = city?.label?.split(' - ') || []

      region.set({ city: citySelected, uf: ufSelected })

      setCity({ value: 0, label: '' } as AutocompleteOptions)
      setCities([])
    }
  }, [city])

  return (
    <Container>
      <Autocomplete
        label="Cidade e Estado: "
        placeholder="Informe uma Cidade"
        value={city}
        setValue={setCity}
        options={cities}
        setOptions={setCities}
        error=""
        data-test="city"
      />
    </Container>
  )
}
