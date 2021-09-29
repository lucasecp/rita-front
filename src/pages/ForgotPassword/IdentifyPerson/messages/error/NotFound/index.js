import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'
import OutlineButton from '@/components/Button/Outline'

function NotFound(data) {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToInitialRegister = () => {
    closeModal()
    history.push('/cadastro-inicial')
  }

  return (
    <Container>
      <img src={warning} />
      <p>
        Desculpe, os seus dados não foram encontrados. Deseja realizar o seu
        cadastro na Rita Saúde?
      </p>
      <footer>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToInitialRegister}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default NotFound
