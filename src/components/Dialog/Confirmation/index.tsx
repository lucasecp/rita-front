import React from 'react'

import { useDialog } from '@/hooks/useDialog'
import ButtonOutline from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

export const DialogConfirmation: React.FC<
  RitaComponents.DialogConfirmationProps
> = ({
  message,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
  onTruthy,
  onFalsy,
}) => {
  const { dialogClose } = useDialog()

  function handleCancel() {
    dialogClose()
    onTruthy && onTruthy()
  }

  function handleConfirm() {
    dialogClose()
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
