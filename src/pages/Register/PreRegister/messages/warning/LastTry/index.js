import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'

function LastTry({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
      Esta é sua ultima tentativa, caso insira informações incorretas seu acesso será bloqueado.
      </p>
      <ButtonPrimary onClick={handleCloseModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default LastTry
