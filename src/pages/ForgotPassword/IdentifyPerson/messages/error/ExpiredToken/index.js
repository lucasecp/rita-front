import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'

import { useModal } from '@/hooks/useModal'

function ExpiredSessionDefinePassword() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>Token expirado. Por favor inicie o processo novamente.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default ExpiredSessionDefinePassword
