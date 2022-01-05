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
import { Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import convertDateToIso from '@/helpers/convertDateToIso'
import { verifyTypedFields } from '../../helpers/verifyTypedFields'
import useQuery from '@/hooks/useQuery'
import moment from 'moment'
import { SellableItemsFilters } from '../../@types'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<SellableItemsFilters>>;
}

export const Filter: React.FC<FilterProps> = ({ setFilters }) => {
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
    setStatus([])
    setServices([])
    setRegional([])
    setUf([])
    setCity([])
    setFilters([])
  }

  const onFilterResults = () => {
    let servicesWithoutAll = []
    let statusWithoutAll = []
    let RegionalWithoutAll = []

    const hasAllOptionInServices = services.some((service) => service.id === 0)

    if (hasAllOptionInServices) {
      servicesWithoutAll = services.filter((service) => service.id !== 0)
    }

    const hasAllOptionInStatus = status.some((status) => status.id === 0)

    if (hasAllOptionInStatus) {
      statusWithoutAll = status.filter((status) => status.id !== 0)
    }

    

    setFilters({
      code,
      plan,
      servicesWithoutAll,
      statusWithoutAll,
      regional,
      uf,
      city,
    })
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
          options={[
            { name: 'Todos', id: 0 },
            { name: 'Ativo', id: 1 },
            { name: 'Inativo', id: 2 },
            { name: 'Em digitação', id: 3 },
            { name: 'Suspenso', id: 4 },
          ]}
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
