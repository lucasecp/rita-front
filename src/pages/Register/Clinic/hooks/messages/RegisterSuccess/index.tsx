import React from 'react'
import success from '@/assets/icons/alerts/success.svg'

import { useHistory } from 'react-router-dom'
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
      <p>
        Cadastro efetuado com sucesso, aguarde a aprovação da clínica para ter
        acesso a plataforma
      </p>
      <footer>
        <ButtonPrimary onClick={handleCloseModal} variation="green">
          Voltar a página inicial
        </ButtonPrimary>
      </footer>
    </Container>
  )
}