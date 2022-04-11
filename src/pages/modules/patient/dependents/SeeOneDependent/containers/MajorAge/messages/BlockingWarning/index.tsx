import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import whatsApp from '@/assets/icons/whatsapp.svg'

export const BlockingWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        O acesso desse dependente foi bloqueado. Pedimos que entre em contato
        com a central de atendimento<span> </span>
        <a
          href="https://api.whatsapp.com/send?phone=6131810999"
          target="_blank"
          rel="noopener noreferrer"
        >
          (61) 3181-0999 <img src={whatsApp} />
        </a>
        .
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
      </footer>
    </Container>
  )
}
