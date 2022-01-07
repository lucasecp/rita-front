import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { ReasonSuspend } from '../ReasonSuspend'

import { Container } from './styles'

interface NotSellableItemsProps {
  plan: {
    id: number
    name: string
  }
}

export const NotSellableItems: React.FC<NotSellableItemsProps> = ({ plan }) => {
  const { showMessage, closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    showMessage(ReasonSuspend, { plan })
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>
        Não há itens vendáveis associados ao plano <span>{plan.name}</span>.
        <br />
        <br />
        Deseja suspender?
      </h6>
      <footer>
        <OutlineButton onClick={onDoNotProceed}>Não</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
