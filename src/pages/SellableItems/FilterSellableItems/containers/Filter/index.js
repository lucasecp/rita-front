import React, { useEffect, useMemo, useState } from 'react'

import MultSelectServices from './components/Services'
import { Ufs } from './components/Ufs'
import { Cities } from './components/Cities'
import { Regionals } from './components/Regionals'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect from '@/components/Form/MultSelect'
import { Container } from './styles'
import { SellableItemsFilters } from '../../@types'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<SellableItemsFilters>>;
}

export const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const [code, setCode] = useState('')
  const [plan, setPlan] = useState('')
  const [services, setServices] = useState([])
  const [status, setStatus] = useState([])
  const [regionals, setRegionals] = useState([])
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const hasNoFilterSelected = useMemo(() => {
    return (
      code === '' &&
      plan === '' &&
      !services.length &&
      !status.length &&
      !regionals.length &&
      !ufs.length &&
      !cities.length
    )
  }, [code, plan, services, status, regionals, ufs, cities])

  const onClearFields = () => {
    setCode('')
    setPlan('')
    setStatus([])
    setServices([])
    setRegionals([])
    setUfs([])
    setCities([])

    setFilters([])
  }

  const onFilterResults = () => {
    // let servicesWithoutAll = services
    // let statusWithoutAll = status
    // let regionalsWithoutAll = regionals

    // const hasAllOptionInServices = services.some((service) => service.id === 0)

    // if (hasAllOptionInServices) {
    //   servicesWithoutAll = services.filter((service) => service.id !== 0)
    // }

    // const hasAllOptionInStatus = status.some((status) => status.id === 0)

    // if (hasAllOptionInStatus) {
    //   statusWithoutAll = status.filter((status) => status.id !== 0)
    // }

    // const hasAllOptionInRegional = regionals.some(
    //   (regional) => regional.id === 0,
    // )

    // if (hasAllOptionInRegional) {
    //   regionalsWithoutAll = regionals.filter((regional) => regional.id !== 0)
    // }

    setFilters({
      code,
      plan,
      services,
      status,
      regionals,
      ufs,
      cities,
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
          // onlyLetter
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
        <Regionals regional={regionals} setRegional={setRegionals} />
        <Ufs uf={ufs} setUf={setUfs} regional={regionals} />
        <Cities city={cities} setCity={setCities} uf={ufs} />
      </div>

      <footer>
        <OutlineButton
          small
          variation="red"
          onClick={onClearFields}
          disabled={hasNoFilterSelected}
        >
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary
          medium
          onClick={onFilterResults}
          disabled={hasNoFilterSelected}
        >
          Filtrar Resultados
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
