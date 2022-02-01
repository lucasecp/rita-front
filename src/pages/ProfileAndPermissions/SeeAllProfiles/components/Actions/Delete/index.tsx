import React from 'react'

import { useModal } from '@/hooks/useModal'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

interface ISimpleModal {
  type: string
  message: string
}

export const c: React.FC<ISimpleModal> = ({ type, message }) => {
  const { closeModal } = useModal()

  const onOk = () => {
    closeModal()
  }

  return (
    <Container>
      {/* <img src={icons[type]} /> */}
      <p>njdfkjsnfkjdsnfkjdsf</p>
      <ButtonPrimary onClick={onOk}>OK</ButtonPrimary>
    </Container>
  )
}
