import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../style'
import success from '@/assets/icons/alerts/success.svg'
import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
const Success = () => {
  const history = useHistory()
  const {closeModal} = useModal()
  const handleCloseModal = () =>{
    closeModal()
    history.push('/')
  }
  return (
    <Container>
      <img src={success} />
      <p>Agradecemos o seu contato e pedimos que aguarde a aprovação pela nossa equipe.</p>
      <ButtonPrimary onClick={handleCloseModal}>Voltar a página inicial</ButtonPrimary>
    </Container>
  )
}

export default Success
