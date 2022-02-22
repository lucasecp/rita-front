import React, { useEffect, useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { IncludeButton } from './components/IncludeButton'

import { Filter } from './containers/Filter'
import { Results } from './containers/Results'

import { SellableItemsFilters } from './@types'
import { Container } from './styles'

export const FilterUsers: React.FC = () => {
  const [filters, setFilters] = useState({} as SellableItemsFilters)

  useEffect(() => {
    document.title = 'Rita Saúde | Usuários'
  }, [])

  return (
    <DefaultLayout title="Gestão de Usuário" headerChildren={<IncludeButton />}>
      <Container>
        <Filter onGetFilters={setFilters} />
        <Results filters={filters} />
      </Container>
    </DefaultLayout>
  )
}