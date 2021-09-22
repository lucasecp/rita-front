import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/context/useModal'

function AlreadyExists() {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToHome = () => {
    closeModal()
    history.push('/')
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Seu CPF já está cadastrado na Rita Saúde. Deseja retornar para a tela
        principal?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToHome}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default AlreadyExists
