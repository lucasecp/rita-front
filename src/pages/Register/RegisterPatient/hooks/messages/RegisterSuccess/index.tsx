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
        Agradecemos o seu contato e pedimos que aguarde a aprovação pela nossa
        equipe.
      </p>
      <footer>
        <ButtonPrimary onClick={handleCloseModal}>
          Voltar a página inicial
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
