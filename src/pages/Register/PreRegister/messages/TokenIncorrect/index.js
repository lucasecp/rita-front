import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../styles'

function TokenIncorrect({ onShowModal, origin }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Por favor, verifique o número fornecido em seu{' '}
        {origin === 'email' ? 'E-mail' : 'Celular'} e tente novamente.
      </p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default TokenIncorrect
