import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from '../../styles'

function Denied({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Desculpe! Seu cadastro apresentou divergência entre os dados digitados e
        documentos apresentados.
      </p>
      <p>
      Pedimos que entre em contato com a central de
        atendimento <a href="tel:+556131810999">(61) 3181-0999 <img src={whatsApp}/></a>
      </p>
      <ButtonPrimary onClick={handleCloseModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default Denied
