import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useModal } from '@/hooks/useModal'
import { useToggle } from '@/hooks/useToggle'
import { ReasonSuspend } from '../../messages/ReasonSuspend'
import { useHistory, useLocation } from 'react-router-dom'

import { Container } from './styles'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

interface SellableItem {
  id: number
  name: string
  price: string
}

interface StateLocation {
  sellableItems: SellableItem[]
  plan: {
    id: number
    name: string
  }
}

export const SuspendPlanConfirm: React.FC = () => {
  const history = useHistory()
  const { sellableItems, plan } = useLocation<StateLocation>().state
  const { showMessage } = useModal()

  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  const onDoNotProceed = () => {
    history.push(DIRECTOR_SEE_PLAN_MANAGMENT)
  }

  const onProceed = () => {
    showMessage(ReasonSuspend, { plan })
  }

  // const toggleExpandSellableItems = () => {
  //   // if (toggleIsSellableItemsExpanded) {
  //   //   toggleIsSellableItemsExpanded()
  //   // }
  // }

  return (
    <DefaultLayout title="Gestão de Planos">
      <Container>
        <div>
          <h1>
            Ao suspender o plano {plan.name.toUpperCase()}, os itens abaixo
            deixam de ser disponibilizados para venda, deseja prosseguir?
          </h1>

          {(sellableItems as any[]).map((sellableItem, index) =>
            isSellableItemsExpanded ? (
              <p key={sellableItem.id}>
                {sellableItem.name} - {sellableItem.price}
              </p>
            ) : (
              index < 5 && (
                <p key={sellableItem.id}>
                  {sellableItem.name} - {sellableItem.price}
                </p>
              )
            ),
          )}
          {sellableItems.length > 5 && (
            <span onClick={toggleIsSellableItemsExpanded}>
              Ver{' '}
              {isSellableItemsExpanded
                ? 'Menos'
                : `+  (${sellableItems.length - 5})`}
            </span>
          )}
        </div>
        <footer>
          <ButtonPrimary onClick={onDoNotProceed}>Não</ButtonPrimary>
          <OutlineButton onClick={onProceed}>Sim</OutlineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
