import React, { useEffect, useState } from 'react'

import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'
import { REGIONAL_AND_UF } from '../../constants/regionalAndUf'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import apiPatient from '@/services/apiPatient'
import { useModal } from '@/hooks/useModal'
import { mapRangesToSendApi } from '../../helpers/mapDataToSendApi'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'

export const AddArea = ({ onGetArea, rangesOfUse = [] }) => {
  const { showSimple } = useModal()

  const [regionals, setRegionals] = useState(REGIONAL_AND_UF)
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const [regionalSelected, setRegionalSelected] = useState('')
  const [ufSelected, setUfSelected] = useState('')
  const [citiesSelected, setCitiesSelected] = useState([])

  useEffect(() => {
    const updateUfs = async () => {
      const ufsApi = await apiPatient.post(
        '/plano/uf',
        mapRangesToSendApi(rangesOfUse),
        {
          params: { regional: regionalSelected },
        }
      )
      const ufsMapped = ufsApi.data.map((uf) => ({
        value: uf.idUF,
        label: firstLetterCapitalize(uf.descricao),
      }))

      setUfs(ufsMapped)
    }

    updateUfs()
    setUfSelected('')
  }, [regionals, regionalSelected])

  useEffect(() => {
    setCitiesSelected([])

    const loadCities = async () => {
      try {
        const citiesApi = await apiPatient.post(
          '/plano/municipio',
          mapRangesToSendApi(rangesOfUse),
          { params: { uf: ufSelected } }
        )

        const citiesMapped = citiesApi.data.map((city) => ({
          id: city.idMunicipio,
          name: firstLetterCapitalize(city.descricao),
        }))

        setCities(citiesMapped)
      } catch (error) {
        showSimple.error('Erro ao carregar as cidades')
      }
    }

    loadCities()
  }, [ufSelected])

  const addArea = () => {
    const findRegional = regionals.find(
      (regional) => regional.value === +regionalSelected
    )

    const findUf = ufs.find((uf) => uf.value === +ufSelected)

    onGetArea({
      regional: findRegional
        ? { label: findRegional.label, value: +regionalSelected }
        : '',
      uf: findUf ? { label: findUf.label, value: +ufSelected } : '',
      cities: citiesSelected,
    })

    setRegionalSelected('')
    setUfSelected('')
    setCitiesSelected([])
  }

  useEffect(() => {
    const updateAreas = async () => {
      const regionalsApi = await apiPatient.post(
        '/plano/regional',
        mapRangesToSendApi(rangesOfUse)
      )

      const ufsApi = await apiPatient.post(
        '/plano/uf',
        mapRangesToSendApi(rangesOfUse)
      )

      const citiesApi = await apiPatient.post(
        '/plano/municipio',
        mapRangesToSendApi(rangesOfUse)
      )

      const regionalsMapped = regionalsApi.data.map((regional) => ({
        value: regional.id,
        label: regional.nome,
      }))

      const ufsMapped = ufsApi.data.map((uf) => ({
        value: uf.idUF,
        label: firstLetterCapitalize(uf.descricao),
      }))

      const citiesMapped = citiesApi.data.map((city) => ({
        value: city.idUF,
        label: firstLetterCapitalize(city.descricao),
      }))

      setRegionals(regionalsMapped)
      setUfs(ufsMapped)
      setCities(citiesMapped)
    }

    updateAreas()
  }, [rangesOfUse])

  return (
    <Container>
      <section>
        <Select
          label="Regional:"
          labelDefaultOption="Selecione..."
          options={regionals}
          name="regional"
          setValue={setRegionalSelected}
          value={regionalSelected}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione..."
          options={ufs}
          name="uf"
          setValue={setUfSelected}
          value={ufSelected}
        />
        <CustomMultSelect
          options={cities}
          label="Cidade(s):"
          value={citiesSelected}
          setValue={setCitiesSelected}
          variation="secondary"
          disabled={!ufSelected}
        />
      </section>
      <ButtonPrimary
        disabled={!regionalSelected && !ufSelected}
        onClick={addArea}
      >
        Adicionar
      </ButtonPrimary>
    </Container>
  )
}
