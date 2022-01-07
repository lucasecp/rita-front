import React, { useMemo } from 'react'

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
import useLocalStorage from 'use-local-storage'

interface FilterProps {
  onGetFilters: React.Dispatch<React.SetStateAction<SellableItemsFilters>>;
}

export const Filter: React.FC<FilterProps> = ({ onGetFilters }) => {
  const [filters, setFilters] = useLocalStorage(
    '@Rita/SellableItems/Filters',
    {},
  )

  const hasNoFilterSelected = useMemo(() => {
    return (
      filters.code === '' &&
      filters.plan === '' &&
      !filters.services.length &&
      !filters.status.length &&
      !filters.regionals.length &&
      !filters.ufs.length &&
      !filters.cities.length
    )
  }, [
    filters.code,
    filters.plan,
    filters.services,
    filters.status,
    filters.regionals,
    filters.ufs,
    filters.cities,
  ])

  const onClearFields = () => {
    setFilters({
      code: '',
      plan: '',
      services: [],
      status: [],
      regionals: [],
      ufs: [],
      cities: [],
    })

    onGetFilters({})
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

    onGetFilters({
      code: filters.code,
      plan: filters.plan,
      services: filters.services,
      status: filters.status,
      regionals: filters.regionals,
      ufs: filters.ufs,
      cities: filters.cities,
    })
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Código:"
          value={filters.code}
          setValue={(value) => setFilters({ ...filters, code: value })}
          maxLength={10}
        />
        <InputText
          variation="secondary"
          label="Nome:"
          // onlyLetter
          value={filters.plan}
          setValue={(value) => setFilters({ ...filters, plan: value })}
          maxLength={50}
        />
        <MultSelectServices
          services={filters.services}
          setServices={(value) => setFilters({ ...filters, services: value })}
        />
        <CustomMultSelect
          label="Status:"
          options={[
            { name: 'Todos', id: 0 },
            { name: 'Ativo', id: 1 },
            { name: 'Inativo', id: 2 },
            { name: 'Em digitação', id: 3 },
            { name: 'Suspenso', id: 4 },
          ]}
          value={filters.status}
          setValue={(value) => setFilters({ ...filters, status: value })}
        />
      </div>
      <div>
        <Regionals
          regional={filters.regionals}
          setRegional={(value) => setFilters({ ...filters, regionals: value })}
        />
        <Ufs
          uf={filters.ufs}
          setUf={(value) => setFilters({ ...filters, ufs: value })}
          regional={filters.regionals}
        />
        <Cities
          city={filters.cities}
          setCity={(value) => setFilters({ ...filters, cities: value })}
          uf={filters.ufs}
        />
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
