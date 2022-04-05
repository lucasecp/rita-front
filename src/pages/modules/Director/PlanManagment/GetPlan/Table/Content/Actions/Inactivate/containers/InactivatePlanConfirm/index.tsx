import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useModal } from '@/hooks/useModal'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { ReasonInactivate } from '../../messages/ReasonInactivate'
import { Container } from './styles'

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

export const InactivatePlanConfirm: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { sellableItems, plan } = useLocation<LocationData>().state

  const [expandPlan, setExpandPlan] = useState(false)

  const onDoNotProceed = () => {
    // history.goBack()
    history.push(DIRECTOR_SEE_PLAN_MANAGMENT)
  }

  const onProceed = async () => {
    showMessage(ReasonInactivate, { plan })
  }

  return (
    <DefaultLayout title="Gestão de Planos">
      <Container>
        <div>
          <h1>
            Ao inativar o plano {plan.name.toUpperCase()}, os itens abaixo serão
            desativados, deseja prosseguir ?
          </h1>

          {(sellableItems as any[]).map((sellableItem, index) =>
            expandPlan ? (
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
            <span onClick={() => setExpandPlan(!expandPlan)}>
              Ver {expandPlan ? '-' : `+  (${sellableItems.length - 4})`}
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
