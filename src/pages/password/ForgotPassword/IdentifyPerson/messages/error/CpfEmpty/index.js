import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'

import { useModal } from '@/hooks/useModal'

function CpfEmpty() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>O campo CPF deve ser informado.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default CpfEmpty