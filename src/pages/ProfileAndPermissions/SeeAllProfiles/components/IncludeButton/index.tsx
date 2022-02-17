import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
import { DIRECTOR_CREATE_PROFILE } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

export const IncludeButton: React.FC = () => {
  const history = useHistory()

  const onIncludeSellableItem = () => {
    return history.push(DIRECTOR_CREATE_PROFILE)
  }

  return (
    <ButtonPrimary medium onClick={onIncludeSellableItem}>
      Incluir
    </ButtonPrimary>
  )
}
