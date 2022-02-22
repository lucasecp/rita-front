import ButtonPrimary from '@/components/Button/Primary'
import { DIRECTOR_FILTER_USERS } from '@/routes/constants/namedRoutes/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const IncludeButton: React.FC = () => {
  const history = useHistory()

  // const onIncludeUser = () => {
  // Roteamento para o incluir
  // history.push(DIRECTOR_FILTER_USERS)
  // }

  return (
    <ButtonPrimary
      medium
      onClick={() => {
        console.log('Navegação para Incluir')
      }}
    >
      Incluir
    </ButtonPrimary>
  )
}
