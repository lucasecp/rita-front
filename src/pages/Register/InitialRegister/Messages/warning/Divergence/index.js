import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container,ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'

function ImportData({ onShowModal }) {
  const history = useHistory()
  const pushToHome = () =>{
    onShowModal(false)
    history.push('/')
  }
  return (
    <Container>
      <img src={WarningError} />
      <p>Desculpe! Seu cadastro apresentou divergência entre os dados digitados e documentos apresentados, deseja atualizar suas informações?</p>
      <ButtonGroup>
      <OutlineButton onClick={pushToHome}>Não</OutlineButton>
      <ButtonPrimary onClick={pushToHome}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default ImportData
