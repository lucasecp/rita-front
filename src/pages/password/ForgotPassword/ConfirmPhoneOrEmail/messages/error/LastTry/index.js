import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'

function LastTry({ email, switchModalTo, requestNewToken }) {
  const { closeModal } = useModal()

  const handleCloseModal = () => {
    if (!email && !switchModalTo) {
      return closeModal()
    }
    return switchModalTo('insert_token')
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        {requestNewToken
          ? `Por favor, verifique o número fornecido em seu ${
              email ? 'email' : 'celular'
            }. Esta é sua última tentativa, caso realize nova solicitação, seu acesso será bloqueado! Deseja continuar?`
          : 'Esta é sua última tentativa, caso insira informações incorretas novamente seu acesso será bloqueado!'}
      </p>
      <footer>
        {requestNewToken ? (
          <>
            <OutlineButton onClick={closeModal}>Não</OutlineButton>
            <ButtonPrimary onClick={handleCloseModal}>Sim</ButtonPrimary>
          </>
        ) : (
          <ButtonPrimary onClick={handleCloseModal}>OK</ButtonPrimary>
        )}
      </footer>
    </Container>
  )
}

export default LastTry
