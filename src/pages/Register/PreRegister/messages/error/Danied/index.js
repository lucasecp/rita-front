import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from '../../styles'

function Denied({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>Seu acesso foi bloqueado devido à excesso de tentativas.</p>
      <p>
        Pedimos que entre em contato com a central de atendimento
        <a href="https://api.whatsapp.com/send?phone=556131810999">
          (61) 3181-0999 <img src={whatsApp} />
        </a>
      </p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default Denied
