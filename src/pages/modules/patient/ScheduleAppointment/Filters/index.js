import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputAutoComplete from '@/components/Form/InputAutoComplete'
import apiPatient from '@/services/apiPatient'
import React, { useState } from 'react'
import SelectCity from '../components/SelectCity'
import SelectUf from '../components/SelectUf'
import { BtnGroup, Container } from './styles'
import Results from '../Results'
import { useModal } from '@/hooks/useModal'
import { MASTERPAGE } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

const Filters = () => {
  const [researchDoctor, setResearchDoctor] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(0);
  const { showSimple } = useModal()
  const history = useHistory()

  const someFieldWasTyped = !!city || !!uf || !!researchDoctor
  const onFilter = () => {
    if (!someFieldWasTyped) {
      return showSimple.warning('Informe pelo menos um filtro.')
    }
    showSimple.error('Nenhum resultado encontrado.')

    setSubmitted(true)
  }

  return (
    <>
      <Container>
        <header>
          <h3>O que você procura?</h3>
        </header>
        <InputAutoComplete
          setValue={setResearchDoctor}
          endPoint="/paciente?limit=10&skip=0"
          urlApi={apiPatient}
          placeholder="Selecione"
          label="Especialista, Especialidade ou Clínica:"
          keyLabelFromApi="nome"
          keyValueFromApi="idPaciente"
        />
        <SelectUf setUf={setUf} uf={uf} />
        <SelectCity setCity={setCity} uf={uf} city={city} />
        <BtnGroup>
          <OutlineButton onClick={() => history.push(MASTERPAGE)}>Voltar</OutlineButton>
          <ButtonPrimary onClick={onFilter}>Filtrar Resultados</ButtonPrimary>
        </BtnGroup>
      </Container>

    {/* { submitted && results > 0 && <Results />} */}
    <Results />
    </>
  )
}

export default Filters
