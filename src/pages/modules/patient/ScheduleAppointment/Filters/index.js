import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputAutoComplete from '@/components/Form/InputAutoComplete'
import apiPatient from '@/services/apiPatient'
import React, { useState } from 'react'
import SelectCity from '../components/SelectCity'
import SelectUf from '../components/SelectUf'
import { BtnGroup, Container } from './styles'
import Results from '../Results'

const Filters = () => {
  const [autoComplete, setAutoComplete] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')

  return (
    <>
    <Container>
      <header>
        <h3>O que você procura?</h3>
      </header>
      <InputAutoComplete
        setValue={setAutoComplete}
        endPoint="/paciente?limit=10&skip=0"
        urlApi={apiPatient}
        placeholder="Selecione"
        label="Especialista, Especialidade ou Clínica:"
      />
      <SelectUf setUf={setUf} uf={uf} />
      <SelectCity setCity={setCity} uf={uf} city={city} />
      <BtnGroup>
        <OutlineButton>Voltar</OutlineButton>
        <ButtonPrimary>Filtrar Resultados</ButtonPrimary>
      </BtnGroup>
    </Container>

    <Results/>

    </>
  )
}

export default Filters
