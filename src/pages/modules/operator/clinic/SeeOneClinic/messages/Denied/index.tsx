import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

const Denied: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>O acesso desse dependente foi bloqueado.</p>
      <p>
        Pedimos que entre em contato com a central de atendimento
        <a
          href="https://api.whatsapp.com/send?phone=6131810999"
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

export default Denied
