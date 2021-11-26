import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { MASTERPAGE } from '@/routes/constants/namedRoutes/routes'

export const ProfileInactive = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onChoosePlan = () => {
    closeModal()
    history.push(MASTERPAGE)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <h6>Perfil Inativo</h6>
      <p>Acesse o site da Rita Saúde para escolher o melhor plano para você</p>
      <ButtonPrimary onClick={onChoosePlan}>Escolha seu plano</ButtonPrimary>
    </Container>
  )
}
