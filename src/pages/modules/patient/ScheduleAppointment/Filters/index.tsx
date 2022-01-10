import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputAutoCompleteAntd from '../components/InputAutoCompleteAntd'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import SelectCity from '../components/SelectCity'
import SelectUf from '../components/SelectUf'
import { BtnGroup, Container } from './styles'
import Results from '../Results'
import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'
import { useLoading } from '@/hooks/useLoading'
import { queryFilterString } from '@/helpers/queryString/filter'
import { fromApi } from '../Adapters'
import { toast } from '@/styles/components/toastify'
import { DataI } from '../types/index'
import { queryOrderString } from '@/helpers/queryString/order'
import useQueryParams from './useQueryParams'

const Filters = () => {
  const params = useQueryParams()
  const [researchDoctor, setResearchDoctor] = useState(
    params.researchDoctor || '',
  )
  const [uf, setUf] = useState(params.uf || '')
  const [city, setCity] = useState(params.city || '')
  const [results, setResults] = useState<DataI>({ total: 0 })
  const [filter, setFilter] = useState<any[]>([])

  const [order, setOrder] = useState<any>(
    params.order && params.orderBy
      ? queryOrderString({ name: params.orderBy, value: params.order })
      : '',
  )
  const [wasSubmited, setWasSubmited] = useState(false);

  const [queryApiPagination, setQueryApiPagination] =
    useState('?limit=10&skip=0')

  const history = useHistory()
  const { Loading } = useLoading()

  useEffect(() => {
    if (!filter.length) return
    filterResults()
  }, [queryApiPagination, filter])

  const someFieldWasTyped = !!city || !!uf || !!researchDoctor

  const arrayQuery = [
    { name: 'palavraChave', value: researchDoctor },
    { name: 'municipio', value: city === 'All' ? '' : city },
    { name: 'uf', value: uf === 'All' ? '' : uf },
  ]

  useEffect(() => {
    if (someFieldWasTyped) {
      setFilter(arrayQuery)
      setWasSubmited(true)
    }
  }, [])

  const onFilter = () => {
    if (!someFieldWasTyped) {
      return toast.warning('Informe pelo menos um filtro.')
    }
    setFilter(arrayQuery)
  }

  const verifyTypedFields = (fields: any[]) => {
    return fields.filter((field) => field.value)
  }
  const filterResults = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(
        `/paciente/agenda-consulta${queryApiPagination}${queryFilterString(
          verifyTypedFields(filter),
        )}${order}`,
      )
      setResults({ total: data.total, data: fromApi(data.dados) })
      setOrder(queryOrderString({ name: data.orderBy, value: data.order }))
      setWasSubmited(true)
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <>
      <Container>
        <header>
          <h3>Como você precisa cuidar de sua saúde hoje?</h3>
        </header>
        <InputAutoCompleteAntd
          setValue={setResearchDoctor}
          value={researchDoctor}
        />
        <SelectUf setUf={setUf} uf={uf} />
        <SelectCity setCity={setCity} uf={uf} city={city} />
        <BtnGroup>
          <OutlineButton onClick={() => history.push(INITIAL_PAGE)}>
            Voltar
          </OutlineButton>
          <ButtonPrimary onClick={onFilter}>Filtrar Resultados</ButtonPrimary>
        </BtnGroup>
      </Container>

      {wasSubmited && (
        <Results
          data={results}
          setQueryPagination={setQueryApiPagination}
          restQuery={queryFilterString(filter) + order}
        />
      )}
    </>
  )
}

export default Filters
