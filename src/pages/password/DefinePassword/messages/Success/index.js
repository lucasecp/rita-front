import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import success from '@/assets/icons/alerts/success.svg'

import { Container } from '../style'

import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router-dom'
import { deleteHeaderToken } from '@/storage/user'
import { LOGIN } from '@/routes/constants/namedRoutes/routes'

function DefinePasswordSuccess() {
  const { closeModal } = useModal()
  const history = useHistory()
  const pushToLogin = () => {
    deleteHeaderToken()
    closeModal()
    history.push(LOGIN)
  }
  return (
    <Container>
      <img src={success} />
      <p>Senha alterada com sucesso.</p>
      <ButtonPrimary onClick={pushToLogin}>
        Ir para a tela de login
      </ButtonPrimary>
    </Container>
  )
}

export default DefinePasswordSuccess
