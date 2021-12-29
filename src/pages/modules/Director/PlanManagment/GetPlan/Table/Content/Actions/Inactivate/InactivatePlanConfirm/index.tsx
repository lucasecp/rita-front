import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { toast } from '@/styles/components/toastify'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { useModal } from '@/hooks/useModal'
import { ReasonInactivate } from '../messages/ReasonInactivate'

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

export const InactivatePlanConfirm = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { sellableItems, plan } = useLocation<LocationData>().state

  const [expandPlan, setExpandPlan] = useState(false)

  const onDoNotProceed = () => {
    history.goBack()
  }

  const onProceed = async () => {
    showMessage(ReasonInactivate, { planId: plan.id })
  }

  return (
    <DefaultLayout title="Confirmação Inativar Plano">
      <Container>
        <div>
          <h1>
            Suas alterações afetarão os itens abaixo do Plano {plan.name},
            deseja prosseguir?
          </h1>

          {sellableItems.map((sellableItem, index) =>
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
