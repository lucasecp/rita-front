import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from '../../styles'

function DataDontMatch({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Seu acesso foi bloqueado devido à excesso de tentativas. Pedimos que
        entre em contato com a central de atendimento (61) 3181-0999
        <a href="https://api.whatsapp.com/send?phone=556131810999">
          (61) 3181-0999 <img src={whatsApp} />
        </a>
      </p>
      <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default DataDontMatch
