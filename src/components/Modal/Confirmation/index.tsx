import React from 'react'

import { useModal } from '@/hooks/useModal'
import ButtonOutline from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

export const ConfirmationModal: React.FC<
  RitaComponents.ModalConfirmationProps
> = ({
  message,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
  onTruthy,
  onFalsy,
}) => {
  const { closeModal } = useModal()

  function handleCancel() {
    closeModal()
    onTruthy && onTruthy()
  }

  function handleConfirm() {
    closeModal()
    onFalsy && onFalsy()
  }

  return (
    <Container>
      <section>
        <p>{message}</p>
      </section>

      <footer>
        <ButtonOutline onClick={handleCancel}>{cancelText}</ButtonOutline>
        <ButtonPrimary onClick={handleConfirm}>{confirmText}</ButtonPrimary>
      </footer>
    </Container>
  )
}
