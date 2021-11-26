import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'

export const ProfileInactive = () => {
  const { closeModal } = useModal()

  const onChoosePlan = () => {
    closeModal()
    window.open('https://ritasaude.com.br/rita-e-para-todos/', '_blank')
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
