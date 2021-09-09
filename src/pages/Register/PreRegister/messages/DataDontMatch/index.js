import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../styles'

function DataDontMatch({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Selecione uma das opções: E-mail ou Celular e preencha o dado
        corretamente.
      </p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default DataDontMatch
