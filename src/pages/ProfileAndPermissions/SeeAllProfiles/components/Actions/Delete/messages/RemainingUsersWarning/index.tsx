import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const RemainingUsersWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Há usuários associados à esse perfil. Remova-os antes de executar essa
        ação.
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
