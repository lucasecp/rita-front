import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const InvalidCpf: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>Informe um CPF válido.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
