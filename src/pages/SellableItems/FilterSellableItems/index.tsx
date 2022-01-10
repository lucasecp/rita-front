import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { IncludeButton } from './components/IncludeButton'
import { Filter } from './containers/Filter'
import { Container } from './styles'
import { Results } from './containers/Results'
import { SellableItemsFilters } from './@types'

export const FilterSellableItems: React.FC = () => {
  const [filters, setFilters] = useState({} as SellableItemsFilters)

  useEffect(() => {
    document.title = 'Rita Saúde | Itens Vendáveis'
  }, [])

  return (
    <DefaultLayout title="Itens Vendáveis" headerChildren={<IncludeButton />}>
      <Container>
        <Filter onGetFilters={setFilters} />
        <Results filters={filters} />
      </Container>
    </DefaultLayout>
  )
}
