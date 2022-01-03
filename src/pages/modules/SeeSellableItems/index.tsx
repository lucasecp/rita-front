import { useEffect } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { SellableItemsDisabled } from '@/pages/modules/SeeSellableItems/components/SellableItemsDisabled'

export const SeeSellableItems: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar Itens Vendáveis'
  }, [])

  return (
    <DefaultLayout title="Itens Vendáveis - Visualização">
      <SellableItemsDisabled />
    </DefaultLayout>
  )
}
