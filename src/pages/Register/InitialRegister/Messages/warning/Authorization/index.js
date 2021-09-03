import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container,ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'

function ImportData({ onShowModal }) {
  const handleCloseModal = () => {
    onShowModal(false)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>IAutoriza importar seus dados cadastrais do Cartão Sabin Saúde?</p>
      <ButtonGroup>
      <OutlineButton onClick={handleCloseModal}>Não</OutlineButton>
      <ButtonPrimary onClick={handleCloseModal}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default ImportData
