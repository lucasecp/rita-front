import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { ReasonActivate } from '../messages/ReasonActivate'
import { useToggle } from '@/hooks/useToggle'

interface SellableItem {
  id: number
  name: string
  price: string
}

interface LocationData {
  sellableItems: SellableItem[]
  plan: {
    id: string
    name: string
  }
}

export const ActivatePlanConfirm = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { sellableItems, plan } = useLocation<LocationData>().state
  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  const onDoNotProceed = () => {
    history.back() // nao está retornando
  }

  const onProceed = async () => {
    showMessage(ReasonActivate, { plan })
  }

  return (
    <DefaultLayout title="Gestão de Planos - Editar Plano">
      <Container>
        <div>
          <h1>
            Ao ativar o {plan.name}, os itens abaixo serão disponibilizados para
            venda, deseja prosseguir?
          </h1>

          {sellableItems.map((sellableItem, index) =>
            isSellableItemsExpanded ? (
              <p key={sellableItem.id}>
                {sellableItem.name} - {sellableItem.price}
              </p>
            ) : (
              index < 4 && (
                <p key={sellableItem.id}>
                  {sellableItem.name} - {sellableItem.price}
                </p>
              )
            ),
          )}
          {sellableItems.length > 3 && (
            <span onClick={toggleIsSellableItemsExpanded}>
              Ver{' '}
              {isSellableItemsExpanded
                ? '-'
                : `+  (${sellableItems.length - 4})`}
            </span>
          )}
        </div>
        <footer>
          <ButtonPrimary onClick={onDoNotProceed}>Não</ButtonPrimary>
          <OutilineButton onClick={onProceed}>Sim</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
