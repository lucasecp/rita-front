import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useModal } from '@/hooks/useModal'
import { useToggle } from '@/hooks/useToggle'
import { ReasonUpdate } from '@/pages/modules/Director/PlanManagment/EditPlan/messages/ReasonUpdate'
import { useHistory, useLocation } from 'react-router'

import { Container } from './styles'

interface SellableItem {
  id: number
  name: string
  price: string
}

interface StateLocation {
  sellableItems: SellableItem[]
}

export const SuspendPlanConfirm: React.FC = () => {
  const history = useHistory()
  const { sellableItems } = useLocation<StateLocation>().state
  const { showMessage } = useModal()

  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  const onDoNotProceed = () => {
    history.back()
  }

  const onProceed = () => {
    // showMessage(ReasonUpdate, { plan, hasSellableItems: true })
  }

  return (
    <DefaultLayout title="Gestão de Planos - Suspender Plano">
      <Container>
        <div>
          <h1>
            Ao suspender o plano Especial +60, os itens abaixo deixam de ser
            disponibilizados para venda, deseja prosseguir?
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
          {/* <OutilineButton onClick={onProceed}>Sim</OutilineButton> */}
        </footer>
      </Container>
    </DefaultLayout>
  )
}
