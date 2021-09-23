import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { ButtonGroup, Container } from '../style'

import { useModal } from '@/context/useModal'
import { useHistory } from 'react-router'
import OutlineButton from '@/components/Button/Outline'

function HasCardSabin() {
  const history = useHistory()
  const { closeModal } = useModal()
  const pushToRegister = () =>{
    closeModal(false)
    history.push('/cadastro/paciente')
  }
  const pushToCardSabin = () =>{
    closeModal(false)
    history.push('/cadastro-cartao-sabin')
  }
  return (
    <Container>
      <img src={warning} />
      <p>Possui cartão sabin?</p>
      <ButtonGroup>
        <OutlineButton onClick={pushToRegister}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToCardSabin}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default HasCardSabin
