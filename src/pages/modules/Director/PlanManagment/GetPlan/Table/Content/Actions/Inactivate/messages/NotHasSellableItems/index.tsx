import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { ReasonInactivate } from '../ReasonInactivate'

import { Container } from './styles'

interface NotHasSellableItemsProps {
  plan: any
  sellableItems: boolean
}

export const NotHasSellableItems: React.FC<NotHasSellableItemsProps> = ({
  plan,
}) => {
  const { showMessage } = useModal()
  const { closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    showMessage(ReasonInactivate, { plan }, true)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>
        Não há itens vendáveis associados a esse plano, deseja prosseguir?
      </h6>
      <footer>
        <ButtonPrimary onClick={onProceed}>Sim</ButtonPrimary>
        <OutlineButton onClick={onDoNotProceed}>Não</OutlineButton>
      </footer>
    </Container>
  )
}
