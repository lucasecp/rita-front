import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../style'

import { useModal } from '@/context/useModal'

function InvalidCredences() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>Não foi possível realizar o login. Verifique os dados e tente novamente.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default InvalidCredences
