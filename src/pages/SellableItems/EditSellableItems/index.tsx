import { useEffect } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { SellableItems } from './components/SellableItems'

export const EditSellableItems: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Visualizar Itens Vendáveis'
  }, [])

  return (
    <DefaultLayout title="Itens Vendáveis - Visualização">
      <SellableItems />
    </DefaultLayout>
  )
}
