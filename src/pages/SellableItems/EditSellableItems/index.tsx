import { useEffect } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

export const EditSellableItems: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Editar Itens Vendáveis'
  }, [])

  return <DefaultLayout title="Itens Vendáveis - Edição" />
}
