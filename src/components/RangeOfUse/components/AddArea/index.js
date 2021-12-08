import React, { useEffect, useState } from 'react'

import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'
import { REGIONAL_AND_UF } from '../../constants/regionalAndUf'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import apiPatient from '@/services/apiPatient'
import { useModal } from '@/hooks/useModal'

export const AddArea = ({ onGetArea }) => {
  const { showSimple } = useModal()

  const [regionals, setRegionals] = useState(REGIONAL_AND_UF)
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const [regionalSelected, setRegionalSelected] = useState('')
  const [ufSelected, setUfSelected] = useState('')
  const [citiesSelected, setCitiesSelected] = useState([])

  // const [disabled, setDisabled] = useState({ city: true, button: true })

  useEffect(() => {
    const findRegional = regionals.find(
      (regional) => regional.value === +regionalSelected
    )

    const allUfs = []
    regionals.forEach((regional) =>
      regional.ufs?.forEach((uf) => allUfs.push(uf))
    )

    const ufFromSelectedRegionalOrAll = findRegional?.ufs || allUfs
    setUfs(ufFromSelectedRegionalOrAll)

    setUfSelected('')
  }, [regionals, regionalSelected])

  useEffect(() => {
    setCitiesSelected([])

    const loadCities = async () => {
      try {
        const response = await apiPatient.get('/municipio', {
          params: { idUF: ufSelected },
        })

        const citiesMapped = response.data.dados.map((city) => ({
          id: city.idMunicipio,
          name: city.descricao,
        }))

        setCities(citiesMapped)
      } catch (error) {
        showSimple('Erro ao carregar as cidades')
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
