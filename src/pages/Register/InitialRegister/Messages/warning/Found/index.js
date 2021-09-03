import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'

function Found({ onShowModal }) {
  const history = useHistory()
  const pushToHome = () => {
    onShowModal(false)
    history.push('/')
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Foi localizado um cadastro no Cartão Sabin Saúde. Autoriza importar seus
        dados?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={pushToHome}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToHome}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Found
