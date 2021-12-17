import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputAutoComplete from '@/components/Form/InputAutoComplete'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import SelectCity from '../components/SelectCity'
import SelectUf from '../components/SelectUf'
import { BtnGroup, Container } from './styles'
import Results from '../Results'
import { useModal } from '@/hooks/useModal'
import { MASTERPAGE } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'
import InputText from '@/components/Form/InputText'
import { useLoading } from '@/hooks/useLoading'
import { queryFilterString } from '@/helpers/queryString/filter'
import { fromApi } from '../Adapters'

const Filters = () => {
  const [researchDoctor, setResearchDoctor] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [results, setResults] = useState(false)
  const [filter, setFilter] = useState([])
  const [queryApiPagination, setQueryApiPagination] = useState('limit=10&skip=0')
  const { showSimple } = useModal()
  const history = useHistory()
  const { Loading } = useLoading()

  useEffect(() => {
    if(!filter.length) return
    filterResults()

  }, [queryApiPagination, filter])

  const someFieldWasTyped = !!city || !!uf || !!researchDoctor

  const arrayQuery = [
    { name: 'palavraChave', value: researchDoctor },
    { name: 'municipio', value: city },
    { name: 'uf', value: uf },
  ]

  const onFilter = () => {
    if (!someFieldWasTyped) {
      return showSimple.warning('Informe pelo menos um filtro.')
    }
    setFilter(verifyTypedFields(arrayQuery))
  }

  const filterResults = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(
        `/paciente/agenda-consulta${queryApiPagination}${queryFilterString(filter)}`
        )
        if (data.total === 0) {
          return showSimple.error('Nenhum resultado encontrado.')
        }
      setResults({total: data.total, clinics: fromApi(data.clinicas) })

    } catch (error) {
      console.log(error);
    } finally {
      Loading.turnOff()
    }
  }

  const verifyTypedFields = (fields) => {
    return fields.filter((field) => field.value)
  }

  return (
    <>
      <Container>
        <header>
          <h3>Como você precisa cuidar de sua saúde hoje?</h3>
        </header>
        {/* <InputAutoComplete
          setValue={setResearchDoctor}
          endPoint="/paciente?limit=10&skip=0"
          urlApi={apiPatient}
          placeholder="O que você procura?"
          label="Especialista, Especialidade ou Clínica:"
          keyLabelFromApi="nome"
          keyValueFromApi="idPaciente"
        /> */}
        <InputText
          label="Especialista, Especialidade ou Clínica:"
          setValue={setResearchDoctor}
          value={researchDoctor}
          placeholder="O que você procura?"
        />
        <SelectUf setUf={setUf} uf={uf} />
        <SelectCity setCity={setCity} uf={uf} city={city} />
        <BtnGroup>
          <OutlineButton onClick={() => history.push(MASTERPAGE)}>
            Voltar
          </OutlineButton>
          <ButtonPrimary onClick={onFilter}>Filtrar Resultados</ButtonPrimary>
        </BtnGroup>
      </Container>

       <Results data={results} setQueryPagination={setQueryApiPagination}/>
    </>
  )
}

export default Filters
