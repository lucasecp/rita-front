import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'

export const CpfPendingOrWaiting = ({ cpf }) => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        O CPF {cpf} não está habilitado para atendimento. A documentação está em
        análise pela equipe Rita Saúde.
      </p>
      <p>
        Para maiores informações, solicite ao paciente que entre em contato pelo
        WhatsApp <strong>(61) 3181-0999</strong>.
      </p>

      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
