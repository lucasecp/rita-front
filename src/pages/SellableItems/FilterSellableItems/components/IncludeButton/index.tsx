import ButtonPrimary from '@/components/Button/Primary'
import { CREATE_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const IncludeButton: React.FC = () => {
  const history = useHistory()

  const onIncludeSellableItem = () => {
    history.push(CREATE_SELLABLE_ITEMS)
  }

  return (
    <ButtonPrimary medium onClick={onIncludeSellableItem}>
      Incluir
    </ButtonPrimary>
  )
}
