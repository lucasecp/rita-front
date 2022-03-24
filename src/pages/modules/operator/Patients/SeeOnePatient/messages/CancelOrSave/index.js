import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const CancelOrSave = ({ setConfirmSave }) => {
  const { closeModal } = useModal()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    setConfirmSave(true)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Ao alterar o status para “Pendente” ou “Inativo”, todas as informações
        de filiação de plano e tabela de preços serão removidas e, caso haja
        dependentes associados a esse paciente, eles perderão acesso à
        plataforma até que o paciente seja validado novamente.
        <br />
        Confirma a alteração?
      </p>
      <footer>
        <ButtonPrimary onClick={onConfirmExit}>Não</ButtonPrimary>
        <OutlineButton onClick={onDoNotConfirmExit}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}
