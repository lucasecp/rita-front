import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'

function Found({ onShowModal,cpf,telefones,emails }) {
  const history = useHistory()

  const pushToRegister = () => {
    onShowModal(false)
   return history.push('/')
  }
  const pushToPreRegister = () => {
    const dataToSend = {cpf, celular: telefones[0], email:emails[0]}
    onShowModal(false)
    history.push('/pre-cadastro', dataToSend)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Foi localizado um cadastro no Cartão Sabin Saúde. Autoriza importar seus
        dados?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={pushToRegister}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Found
