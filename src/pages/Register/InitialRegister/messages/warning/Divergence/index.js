import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container,ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'

function Divergence({ onShowModal,cpf }) {
  const history = useHistory()
  const pushToPreRegister = () => {
    onShowModal(false)
    history.push('/pre-cadastro',{cpf})
  }
  return (
    <Container>
      <img src={WarningError} />
      <p>Desculpe! Seu cadastro apresentou divergência entre os dados digitados e documentos apresentados, deseja atualizar suas informações?</p>
      <ButtonGroup>
      <OutlineButton onClick={() => onShowModal(false)}>Não</OutlineButton>
      <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Divergence
