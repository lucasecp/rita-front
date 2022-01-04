import React, { useEffect, useState } from 'react'

import MultSelectServices from './components/Services'
import { Ufs } from './components/Ufs'
import { Cities } from './components/Cities'
import { Regionals } from './components/Regionals'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomRangePicker from '@/components/Form/CustomRangePicker'
import CustomMultSelect from '@/components/Form/MultSelect'
import { STATUS } from '../../constants/status'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import convertDateToIso from '@/helpers/convertDateToIso'
import { verifyTypedFields } from '../../helpers/verifyTypedFields'
import useQuery from '@/hooks/useQuery'
import moment from 'moment'

export const Filter = ({ setFilters }) => {
  // const query = useQuery()

  const [code, setCode] = useState('')
  const [plan, setPlan] = useState('')
  const [services, setServices] = useState([])
  const [status, setStatus] = useState([])
  const [regional, setRegional] = useState([])
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])

  // useEffect(() => {
  //   setFilters(verifyTypedFields(arrayQuery))
  // }, [])

  // const arrayQuery = [
  //   { name: 'nome', value: name },
  //   { name: 'codigo', value: code },
  //   { name: 'status', value: formatMultSelectValue(status) },
  //   { name: 'idServico', value: formatMultSelectValue(services) },
  //   { name: 'idRegional', value: formatMultSelectValue(regional) },
  //   { name: 'idUf', value: formatMultSelectValue(uf) },
  //   { name: 'idCidade', value: formatMultSelectValue(city) },
  //   { name: 'periodoAtivacaoInicio', value: convertDateToIso(validityDate[0]) },
  //   { name: 'periodoAtivacaoFim', value: convertDateToIso(validityDate[1]) },
  // ]

  const onClearFields = () => {
    setCode('')
    setPlan('')
    setStatus('')
    setServices('')
    setRegional('')
    setUf('')
    setCity('')
    setFilters([])
  }

  const onFilterResults = () => {
    setFilters({ code, plan, services, status, regional, uf, city })
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
          value={plan}
          setValue={setPlan}
          maxLength="50"
        />
        <MultSelectServices services={services} setServices={setServices} />
        <CustomMultSelect
          label="Status:"
          options={STATUS}
          value={status}
          setValue={setStatus}
        />
      </div>
      <div>
        <Regionals regional={regional} setRegional={setRegional} />
        <Ufs uf={uf} setUf={setUf} regional={regional} />
        <Cities city={city} setCity={setCity} uf={uf} />
      </div>

      <footer>
        <OutlineButton small variation="red" onClick={onClearFields}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilterResults}>
          Filtrar Resultados
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
