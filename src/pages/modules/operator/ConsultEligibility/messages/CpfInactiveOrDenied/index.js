import React from 'react'

import errorIcon from '@/assets/icons/alerts/error.svg'

import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const CpfInactiveOrDenied = ({ cpf }) => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={errorIcon} />
      <p>O CPF {cpf} não está habilitado para atendimento.</p>
      <p>
        Solicite ao paciente que entre em contato pelo WhatsApp{' '}
        <strong>(61) 3181-0999</strong>.
      </p>

      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
