import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function LastTry() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Esta é sua ultima tentativa, caso insira informações incorretas seu
        acesso será bloqueado.
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default LastTry
