import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container,ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'

function ImportData({ onShowModal, cpf,emails, telefones }) {
  const history = useHistory()

  const pushToHome = () => {
    onShowModal(false)
    history.push('/')
  }
  const pushToPreRegister = () => {
    const dataToSend = {cpf,celular: telefones[0], email:emails[0]}
    onShowModal(false)
    history.push('/pre-cadastro', dataToSend)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>Autoriza importar seus dados cadastrais do Cartão Sabin Saúde?</p>
      <ButtonGroup>
      <OutlineButton onClick={pushToHome}>Não</OutlineButton>
      <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default ImportData
