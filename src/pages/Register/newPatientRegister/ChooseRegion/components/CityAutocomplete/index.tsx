import React, { useEffect, useState } from 'react'

import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'

import { Container } from './styles'
import apiAdmin from '@/services/apiAdmin'
import { citiesFromApi } from './adapters/fromApi'
import { RegionState } from '../..'

interface CityAutocompleteProps {
  region: RegionState
  onGetCity: (city: AutocompleteOptions) => void
}

export const CityAutocomplete: React.FC<CityAutocompleteProps> = ({
  region,
  onGetCity,
}) => {
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

        if (citiesMapped.length === 1) {
          setCity(citiesMapped[0])
        }

        setCities(citiesMapped)
      } catch (error) {
        console.log(error)
      }
    }

    if (city?.label?.length > 2) {
      loadCities()
    }

    onGetCity(city)
  }, [city])

  useEffect(() => {
    setCity({ label: region.city, value: 0 })
  }, [region])

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
