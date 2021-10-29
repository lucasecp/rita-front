import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from '../../styles'
import { useModal } from '@/hooks/useModal'

function Inactive() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Desculpe! Seu cadastro está inativo.
        <br />
        Pedimos que entre em contato com a central de atendimento
        <a
          href="https://api.whatsapp.com/send?phone=556131810999"
          target="_blank"
          rel="noopener noreferrer"
        >
          (61) 3181-0999 <img src={whatsApp} />
        </a>
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default Inactive
