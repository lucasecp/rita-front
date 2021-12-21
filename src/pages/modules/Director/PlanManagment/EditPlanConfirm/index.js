import React from 'react'
import { useHistory, useLocation } from 'react-router'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useToggle } from '@/hooks/useToggle'

export const EditPlanConfirm = () => {
  const history = useHistory()
  const { sellableItems } = useLocation().state

  console.log(sellableItems)

  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  const onDoNotProceed = () => {
    history.goBack()
  }

  return (
    <DefaultLayout title="Editar Plano">
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
            )
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
          <OutilineButton>Sim</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
