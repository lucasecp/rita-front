import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomRangePicker from '@/components/Form/CustomRangePicker'
import CustomMultSelect from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import MultSelectCity from '../components/MultSelectCity'
import MultSelectRegional from '../components/MultSelectRegional'
import MultSelectServices from '../components/MultSelectServices'
import MultSelectUf from '../components/MultSelectUf'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import convertDateToIso from '@/helpers/convertDateToIso'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import useQuery from '@/hooks/useQuery'
import moment from 'moment'

const Filter = ({ setFilters }) => {
  const query = useQuery()

  const VALIDITY_DATE =
    !query.get('periodoAtivacaoInicio') || !query.get('periodoAtivacaoFim')
      ? []
      : [
          moment(String(query.get('periodoAtivacaoInicio'))),
          moment(String(query.get('periodoAtivacaoFim'))),
        ]

  const [name, setName] = useState(query.get('nome') || '')
  const [code, setCode] = useState(query.get('codigo') || '')
  const [status, setStatus] = useState([])
  const [services, setServices] = useState([])
  const [regional, setRegional] = useState([])
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
  const [validityDate, setValidityDate] = useState(VALIDITY_DATE)

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    { name: 'nome', value: name },
    { name: 'codigo', value: code },
    { name: 'status', value: formatMultSelectValue(status) },
    { name: 'idServico', value: formatMultSelectValue(services) },
    { name: 'idRegional', value: formatMultSelectValue(regional) },
    { name: 'idUf', value: formatMultSelectValue(uf) },
    { name: 'idCidade', value: formatMultSelectValue(city) },
    { name: 'periodoAtivacaoInicio', value: convertDateToIso(validityDate[0]) },
    { name: 'periodoAtivacaoFim', value: convertDateToIso(validityDate[1]) },
  ]

  const clearFields = () => {
    setName('')
    setCode('')
    setStatus('')
    setServices('')
    setRegional('')
    setUf('')
    setCity('')
    setValidityDate([])
    setFilters([])
  }

  const onFilter = () => {
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Código:"
          value={code}
          setValue={setCode}
          maxLength="10"
        />

        <InputText
          variation="secondary"
          label="Nome:"
          onlyLetter
          value={name}
          setValue={setName}
          maxLength="50"
        />

        <CustomRangePicker
          label="Período de Vigência:"
          value={validityDate}
          setValue={setValidityDate}
          inputReadOnly={true}
        />

        <CustomMultSelect
          label="Status:"
          options={staticStatus}
          value={status}
          setValue={setStatus}
        />
        <MultSelectServices services={services} setServices={setServices} />

        <MultSelectRegional regional={regional} setRegional={setRegional} />

        <MultSelectUf uf={uf} setUf={setUf} regional={regional} />

        <MultSelectCity city={city} setCity={setCity} uf={uf} />
      </div>

      <BtnGroup>
        <OutlineButton small variation="red" onClick={() => clearFields()}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilter}>
          Filtrar Resultados
        </ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
