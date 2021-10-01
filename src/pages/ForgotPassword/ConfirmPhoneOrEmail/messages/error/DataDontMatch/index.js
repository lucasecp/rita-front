import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function DataDontMatch({choice}) {
  const { closeModal } = useModal()
  console.log(choice);

  const renderMessage = () => {
    if (choice === 'phone') {
      return 'Celular'
    }

    if (choice === 'email') {
      return 'E-mail'
    }
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>{renderMessage()} não confere com o cadastrado, preencha o dado corretamente.</p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default DataDontMatch