import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import successIcon from '@/assets/icons/alerts/success.svg'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'
import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

export const SuccessUpdateProfile = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onComeBackInitialPage = () => {
    history.push(INITIAL_PAGE)
    closeModal()
  }

  return (
    <Container>
      <img src={successIcon} />
      <p>Alteração salva com sucesso!</p>
      <ButtonPrimary onClick={onComeBackInitialPage}>
        Voltar a página inicial
      </ButtonPrimary>
    </Container>
  )
}
