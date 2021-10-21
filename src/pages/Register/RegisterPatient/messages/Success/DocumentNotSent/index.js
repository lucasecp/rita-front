import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container } from '../../style'
import success from '@/assets/icons/alerts/success.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
const DocumentNoSent = () => {
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
        Seus dados foram cadastrados, porém, os documentos não foram enviados.
        Entre em contato com a central de atendimento Rita no 
        <a
          href="https://api.whatsapp.com/send?phone=556131810999"
          target="_blank"
          rel="noopener noreferrer"
        >
          (61) 3181-0999 <img src={whatsApp} />
        </a>
      </p>
      <ButtonPrimary onClick={handleCloseModal}>
        Voltar a página inicial
      </ButtonPrimary>
    </Container>
  )
}

export default DocumentNoSent
