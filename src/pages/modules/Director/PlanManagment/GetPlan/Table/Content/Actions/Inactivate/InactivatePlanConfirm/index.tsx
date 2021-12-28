import React from 'react'
import { useLocation, useHistory } from 'react-router'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useToggle } from '@/hooks/useToggle'
import { useModal } from '@/hooks/useModal'

interface SellableItem {
  id: number
  name: string
  price: string
}

interface LocationData {
  sellableItems: SellableItem[]
}

export const InactivatePlanConfirm = () => {
  const history = useHistory()
  const { sellableItems } = useLocation<LocationData>().state

  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  console.log(sellableItems)

  const onDoNotProceed = () => {
    history.back()
  }

  const onProceed = () => {
    // showMessage(ReasonUpdate, { plan, hasSellableItems: true })
  }

  return (
    <DefaultLayout title="Confirmação Inativar Plano">
      <Container>
        <div>
          <h1>
            Suas alterações afetarão os itens abaixo do Plano Vida, deseja
            prosseguir?
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
          {/* {sellableItems.length > 3 && (
            <span onClick={toggleIsSellableItemsExpanded}>
              Ver{' '}
              {isSellableItemsExpanded
                ? '-'
                : `+  (${sellableItems.length - 4})`}
            </span>
          )} */}
        </div>
        <footer>
          <ButtonPrimary onClick={onDoNotProceed}>Não</ButtonPrimary>
          <OutilineButton onClick={onProceed}>Sim</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
