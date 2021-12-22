import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { ReasonUpdate } from '@/pages/modules/Director/PlanManagment/EditPlan/messages/ReasonUpdate'

import { Container } from './styles'

export const NotSellableItems = ({ plan }) => {
  const { showMessage } = useModal()
  const { closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    showMessage(ReasonUpdate, { plan, hasSellableItems: false })
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
