import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const KeyProfileWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Este perfil é um Perfil chave, sua exclusão gera impactos no sistema e,
        portanto, não pode ser realizada
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
