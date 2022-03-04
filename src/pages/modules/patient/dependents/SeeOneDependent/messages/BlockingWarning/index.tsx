import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const BlockingWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        O acesso desse dependente foi bloqueado. Pedimos que entre em contato
        com a central de atendimento{' '}
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=556131810999"
          rel="noreferrer"
        >
          Rita Saúde
        </a>
        (61) 3181-0999 (logo do WhatsApp).
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
      </footer>
    </Container>
  )
}
