import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { NotHasSellableItems } from './messages/NotHasSellableItems'
import { formatPrice } from '@/helpers/formatPrice'

import { DIRECTOR_INACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'
import InactivateIcon from './styles'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'

interface InactivateProps {
  status: string
  plan: {
    id: string
    name: string
  }
}
interface SellableItem {
  nome: string
  preco: string
}

export const Inactivate: React.FC<InactivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()
  const { Loading } = useLoading()

  const onInactivePlan = async () => {
    let sellableItems: SellableItem[] = []

    try {
      Loading.turnOn()

      const { data } = await apiAdmin.patch(`/plano/${plan.id}/inativar`, {
        params: {
          confirmado: false,
        },
      })

      const sellableItemsMapped = data.map((sellableItem: SellableItem) => ({
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
      history.push(DIRECTOR_INACTIVATE_PLAN, {
        sellableItems: sellableItems,
        plan: {
          id: plan.id,
          name: plan.name,
        },
      })
    } else {
      showMessage(NotHasSellableItems, {
        plan,
      })
    }
  }

  return (
    <CustomTooltip label="Inativar">
      <InactivateIcon
        hidden={
          status !== 'Ativo' &&
          status !== 'Suspenso' &&
          status !== 'Em digitação'
        }
        onClick={onInactivePlan}
      />
    </CustomTooltip>
  )
}
