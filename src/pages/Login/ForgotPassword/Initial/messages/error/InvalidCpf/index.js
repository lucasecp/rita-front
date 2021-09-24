import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function InvalidCpf() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>Informe um CPF válido.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default InvalidCpf
