import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import success from '@/assets/icons/alerts/success.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'

import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const DocumentsNotSended: React.FC = () => {
  const history = useHistory()
  const { closeModal } = useModal()

  const onComeBack = () => {
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
      <footer>
        <ButtonPrimary onClick={onComeBack}>
          Voltar a página inicial
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
