import React, { useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { IncludeButton } from './components/IncludeButton'
import { Filter } from './containers/Filter'
import { Container } from './styles'
import { Results } from './containers/Results'
import { SellableItemsFilters } from './@types'
import useLocalStorage from 'use-local-storage'

export const FilterSellableItems: React.FC = () => {
  const [filters, setFilters] = useLocalStorage(
    '@Rita/SellableItems/Filters',
    {} as SellableItemsFilters,
  )

  return (
    <DefaultLayout title="Itens Vendáveis" headerChildren={<IncludeButton />}>
      <Container>
        <Filter setFilters={setFilters} />
        <Results filters={filters} />
      </Container>
    </DefaultLayout>
  )
}
