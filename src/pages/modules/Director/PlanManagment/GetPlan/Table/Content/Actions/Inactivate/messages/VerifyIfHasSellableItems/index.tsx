import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

interface VerifyIfHasSellableItemsProps {
  plan: any
  sellableItems: boolean
}

export const VerifyIfHasSellableItems: React.FC<
  VerifyIfHasSellableItemsProps
> = ({ plan, sellableItems }) => {
  const { showMessage } = useModal()
  const { closeModal } = useModal()

  console.log(sellableItems)

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    // showMessage(ReasonUpdate, { plan, hasSellableItems: false }, true)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>
        Não há itens vendáveis associados a esse plano, deseja prosseguir?
      </h6>
      <footer>
        <OutlineButton onClick={onDoNotProceed}>Não</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
