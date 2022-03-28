import React, { useEffect, useState } from 'react'

import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import apiPatient from '@/services/apiPatient'
import { useModal } from '@/hooks/useModal'
import { mapRangesToSendApi } from '../../helpers/mapDataToSendApi'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import apiAdmin from '@/services/apiAdmin'

type RangeOfUseProps = {
  onGetArea: any
  rangesOfUse: any
  ufs: any
  setUfs: any
  setRegionalSelected: any
  regionalSelected: any
  regionals: any
  setUfSelected: any
  ufSelected: any
  city: any
  setCity: any
  onGetUfs: any
  citiesSelected: any
  setCitiesSelected: any
}

export const AddArea: React.FC<RangeOfUseProps> = ({
  onGetArea,
  rangesOfUse,
  ufs,
  setUfs,
  setRegionalSelected,
  regionalSelected,
  regionals,
  setUfSelected,
  ufSelected,
  city,
  setCity,
  onGetUfs,
  citiesSelected,
  setCitiesSelected,
}) => {
  const { showSimple } = useModal()

  const addArea = () => {
    const findRegional = regionals.find(
      (regional: any) => regional.value === +regionalSelected,
    )

    const findUf = ufs.find((uf: any) => uf.value === +ufSelected)

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

  // useEffect(() => {
  //   const updateAreas = async () => {
  //     const regionalsApi = await apiAdmin.post(
  //       '/plano/regional',
  //       mapRangesToSendApi(rangesOfUse),
  //     )

  //     const ufsApi = await apiAdmin.post(
  //       '/plano/uf',
  //       mapRangesToSendApi(rangesOfUse),
  //     )

  //     const cityApi = await apiAdmin.post(
  //       '/plano/municipio',
  //       mapRangesToSendApi(rangesOfUse),
  //     )

  //     const regionalsMapped = regionalsApi.data.map((regional) => ({
  //       value: regional.id,
  //       label: regional.nome,
  //     }))

  //     const ufsMapped = ufsApi.data.map((uf) => ({
  //       value: uf.idUF,
  //       label: firstLetterCapitalize(uf.descricao),
  //     }))

  //     const cityMapped = cityApi.data.map((city) => ({
  //       value: city.idUF,
  //       label: firstLetterCapitalize(city.descricao),
  //     }))

  //     setCity(cityMapped)
  //   }

  //   updateAreas()
  // }, [rangesOfUse])

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
          disabled
          // ={regionals.length === 0}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione..."
          options={ufs}
          name="uf"
          setValue={setUfSelected}
          value={ufSelected}
          disabled
          // ={!regionalSelected.length}
        />
        <CustomMultSelect
          options={city}
          label="Cidade(s):"
          value={citiesSelected}
          setValue={setCitiesSelected}
          variation="secondary"
          disabled
          // ={!ufSelected}
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
