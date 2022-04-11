import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../style'

import { useModal } from '@/hooks/useModal'
import whatsApp from '@/assets/icons/whatsapp.svg'

const UserBlocked = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>Seu acesso foi bloqueado devido à excesso de tentativas.</p>
      <p>
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

export default UserBlocked
