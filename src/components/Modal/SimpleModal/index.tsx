import React from 'react'

import errorIcon from '@/assets/icons/alerts/error.svg'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import successIcon from '@/assets/icons/alerts/success.svg'

import { useModal } from '@/hooks/useModal'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

interface ISimpleModal {
  type: string
  message: string
}

export const MODAL_TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
}

const icons = {
  [MODAL_TYPES.ERROR]: errorIcon,
  [MODAL_TYPES.WARNING]: warningIcon,
  [MODAL_TYPES.SUCCESS]: successIcon,
}

export const SimpleModal: React.FC<ISimpleModal> = ({ type, message }) => {
  const { closeModal } = useModal()

  const onOk = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={icons[type]} />
      <p>{message}</p>
      <ButtonPrimary onClick={onOk}>OK</ButtonPrimary>
    </Container>
  )
}
