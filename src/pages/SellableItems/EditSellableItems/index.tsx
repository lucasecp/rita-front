import { useEffect } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { SellableItemsDisabled } from './components/SellableItemsDisabled'

export const EditSellableItems: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar Itens Vendáveis'
  }, [])

  return (
    <DefaultLayout title="Itens Vendáveis - Visualização">
      <SellableItemsDisabled />
    </DefaultLayout>
  )
}
