import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { ReasonInactivate } from '../ReasonInactivate'

import { Container } from './styles'

interface NotHasSellableItemsProps {
  plan: {
    id: string
    name: string
  }
}

export const NotHasSellableItems: React.FC<NotHasSellableItemsProps> = ({
  plan,
}) => {
  const { showMessage, closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    showMessage(ReasonInactivate, { plan })
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>
        Não há itens vendáveis associados ao plano <span>{plan.name}</span>.
      </h6>
      <p>Deseja inativar ?</p>
      <footer>
        <ButtonPrimary onClick={onDoNotProceed}>Não</ButtonPrimary>
        <OutlineButton onClick={onProceed}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}
