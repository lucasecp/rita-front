import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

export const ConfirmExit: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const handleCloseModal = () => {
    closeModal()
    history.push('/')
  }

  return (
    <Container>
      <img src={warning} />
      <p>
        Seu cadastro ainda não foi concluído e as informações preenchidas não
        serão salvas. Confirma a saída?
      </p>
      <footer>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={handleCloseModal}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
