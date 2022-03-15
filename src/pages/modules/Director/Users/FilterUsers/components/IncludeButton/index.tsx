import ButtonPrimary from '@/components/Button/Primary'
import { CREATE_USER } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const IncludeButton: React.FC = () => {
  const history = useHistory()

  const onIncludeUser = () => {
    history.push(CREATE_USER)
  }

  return (
    <ButtonPrimary medium onClick={onIncludeUser}>
      Incluir
    </ButtonPrimary>
  )
}
