import React, { useEffect, useState } from 'react'

import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

export const AddArea: React.FC = () => {
  const [regionals, setRegionals] = useState([])
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const [regionalSelected, setRegionalSelected] = useState('')
  const [ufSelected, setUfSelected] = useState('')
  const [citiesSelected, setCitiesSelected] = useState([])

  return (
    <Container>
      <section>
        <Select
          label="Regional:"
          labelDefaultOption="Selecione..."
          options={regionals}
          setValue={setRegionalSelected}
          value={regionalSelected}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione..."
          options={ufs}
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
          hasError={false}
          messageError=""
        />
      </section>
      <ButtonPrimary disabled={!regionalSelected && !ufSelected}>
        Adicionar
      </ButtonPrimary>
    </Container>
  )
}
