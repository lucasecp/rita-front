import React from 'react'
import success from '@/assets/icons/alerts/success.svg'

import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'

import ButtonPrimary from '@/components/Button/Primary'
import { Container } from './styles'

export const RegisterSuccess: React.FC = () => {
  const history = useHistory()
  const { closeModal } = useModal()

  const handleCloseModal = () => {
    closeModal()
    history.push('/')
  }

  return (
    <Container>
      <img src={success} />
      <p>Cadastro realizado com sucesso</p>
      <footer>
        <ButtonPrimary onClick={handleCloseModal} variation="green">
          Voltar a página inicial
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
