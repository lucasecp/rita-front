import success from '@/assets/icons/alerts/success.svg'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import React from 'react'
import { useHistory } from 'react-router-dom'
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
        Cadastro finalizado com sucesso, aguarde a aprovação pela curadoria.
      </p>
      <footer>
        <ButtonPrimary onClick={handleCloseModal} variation="green">
          Voltar a página inicial
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
