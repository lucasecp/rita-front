import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { NotSellableItems } from './messages/NotSellableItems'
import { DIRECTOR_SUSPEND_PLAN } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

import { SuspendIcon } from './styles'
import apiPatient from '@/services/apiPatient'
import { formatPrice } from '@/helpers/formatPrice'
import { useLoading } from '@/hooks/useLoading'

interface SuspendProps {
  status: string
  plan: {
    id: number
    name: string
  }
}

interface SellableItemResponse {
  nome: string
  preco: string
}

interface SellableItem {
  id: number
  name: string
  price: number
}

export const Suspend: React.FC<SuspendProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { Loading } = useLoading()

  const onSuspendPlan = async () => {
    let sellableItems: SellableItem[] = []

    try {
      Loading.turnOn()

      const { data } = await apiPatient.patch<SellableItemResponse[]>(
        `/plano/${plan.id}/suspender`,
        null,
        {
          params: { confirmado: false },
        },
      )

      const sellableItemsMapped = data.map((sellableItem, index) => ({
        id: index,
        name: sellableItem.nome,
        price: formatPrice(Number(sellableItem.preco)),
      }))

      sellableItems = sellableItemsMapped
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }

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
