import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const NotSellableItems = () => {
  const { closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    // showMessage()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Suas alterações afetarão os itens abaixo, deseja prosseguir?</h6>
      <p>Não há itens vendáveis associados a esse plano.</p>
      <footer>
        <OutlineButton onClick={onDoNotProceed}>Não</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
