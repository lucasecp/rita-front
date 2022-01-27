import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
// import { CREATE_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
// import { useHistory } from 'react-router-dom'

export const IncludeButton: React.FC = () => {
  // const history = useHistory()

  const onIncludeSellableItem = () => {
    // history.push(CREATE_SELLABLE_ITEMS)
    console.log('include')
  }

  return (
    <ButtonPrimary medium onClick={onIncludeSellableItem}>
      Incluir
    </ButtonPrimary>
  )
}
