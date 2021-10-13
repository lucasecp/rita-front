import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import error from '@/assets/icons/alerts/error.svg'

import { Container,ButtonGroup } from '../style'

import { useModal } from '@/context/useModal'
import OutlineButton from '@/components/Button/Outline'

function RecordAlreadyAnalized(data) {
  const { closeModal } = useModal()
  const handleClick = async () => {
   
  }
  return (
    <Container>
      <img src={error} />
      <p>{data.message}</p>
      <ButtonGroup>
      <OutlineButton onClick={closeModal}>Cancelar</OutlineButton>
      <ButtonPrimary onClick={handleClick}>Assumir Validação</ButtonPrimary>
      </ButtonGroup>
      </Container>
  )
}

export default RecordAlreadyAnalized
