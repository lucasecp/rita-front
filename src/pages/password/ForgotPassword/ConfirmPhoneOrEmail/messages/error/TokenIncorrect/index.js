import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'
import { useModal } from '@/hooks/useModal'

function TokenIncorrect({ origin }) {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Por favor, verifique o número fornecido em seu{' '}
        {origin === 'email' ? 'E-mail' : 'Celular'} e tente novamente.
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default TokenIncorrect
