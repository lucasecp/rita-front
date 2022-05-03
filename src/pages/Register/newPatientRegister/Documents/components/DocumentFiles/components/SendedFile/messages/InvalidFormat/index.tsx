import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../style'
import { useModal } from '@/hooks/useModal'

export const InvalidFormat: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>Formato do Arquivo inválido. Por favor, selecione outro arquivo.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
