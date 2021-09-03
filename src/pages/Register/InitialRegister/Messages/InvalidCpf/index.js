import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../styles'

function CpfEmpty({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>Informe um CPF válido.</p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default CpfEmpty
