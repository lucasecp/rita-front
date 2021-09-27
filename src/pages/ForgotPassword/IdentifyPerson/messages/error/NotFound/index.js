import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { ButtonGroup, Container } from '../../styles'
import { useModal } from '@/context/useModal'
import OutlineButton from '@/components/Button/Outline'

function NotFound(data) {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToPreRegister = () => {
    closeModal()
    history.push('/cadastro/paciente',{ userData: { cpf: data.cpf } })
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Desculpe, os seus dados não foram encontrados. Deseja realizar o seu
        cadastro na Rita Saúde?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default NotFound
