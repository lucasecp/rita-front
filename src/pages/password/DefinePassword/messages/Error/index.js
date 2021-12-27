import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import error from '@/assets/icons/alerts/error.svg'

import { Container } from '../style'

import { useModal } from '@/hooks/useModal'

function AlreadyExists({ message }) {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={error} />
      <p>{message}</p>
      <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default AlreadyExists
