import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { ButtonGroup, Container } from '../style'

import { useModal } from '@/context/useModal'

function ExpiredSession() {

  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>Sessão expirada. Faça o seu login.</p>
        <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default ExpiredSession
