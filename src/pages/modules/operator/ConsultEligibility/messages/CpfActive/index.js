import React from 'react'

import successIcon from '@/assets/icons/alerts/success.svg'

import { Container } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'

export const CpfActive = ({ cpf, table }) => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={successIcon} />
      <p>O CPF {cpf} está habilitado para atendimento e associado à</p>
      <h6>Tabela {table}</h6>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
