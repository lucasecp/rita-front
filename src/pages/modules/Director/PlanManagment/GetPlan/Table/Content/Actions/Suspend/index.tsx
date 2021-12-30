import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { NotSellableItems } from './messages/NotSellableItems'
import { DIRECTOR_SUSPEND_PLAN } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

import { SuspendIcon } from './styles'

interface SuspendProps {
  status: string
  plan: {
    id: number
    name: string
  }
}

export const Suspend: React.FC<SuspendProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  const onSuspendPlan = () => {
    let sellableItems: any[] = []
    // call to api
    sellableItems = [
      { id: 1, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
      { id: 2, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    ]
    // sellableItems = []

    if (sellableItems.length) {
      history.push(DIRECTOR_SUSPEND_PLAN, { sellableItems, plan })
    } else {
      showMessage(NotSellableItems, { plan })
    }
  }

  return (
    <CustomTooltip label="Suspender">
      <SuspendIcon
        hidden={status !== 'Inativo' && status !== 'Ativo'}
        onClick={onSuspendPlan}
      />
    </CustomTooltip>
  )
}
