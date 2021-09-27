import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function DataDontMatch({ email, phone }) {
  const { closeModal } = useModal()

  const renderMessage = () => {
    if (phone && email) {
      return 'uma das opções: E-mail ou Celular'
    }

    if (phone) {
      return 'a opção Celular'
    }

    if (email) {
      return 'a opção E-mail'
    }
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>Selecione {renderMessage()} e preencha o dado corretamente.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default DataDontMatch
