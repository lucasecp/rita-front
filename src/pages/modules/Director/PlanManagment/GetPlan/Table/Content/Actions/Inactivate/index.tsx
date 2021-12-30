import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { NotHasSellableItems } from './messages/NotHasSellableItems'
import { formatPrice } from '@/helpers/formatPrice'

import { DIRECTOR_INACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'
import InactivateIcon from './styles'
import apiPatient from '@/services/apiPatient'

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

  const onInactivePlan = async () => {
    const response = await apiPatient.patch<SellableItem[] | []>(
      `/plano/${plan.id}/inativar`,
      {
        params: {
          confirmado: false,
        },
      },
    )

    const sellableItems: SellableItem[] = response.data

    if (sellableItems.length) {
      const sellableItemsMapped = sellableItems.map(
        (sellableItem: SellableItem) => ({
          name: sellableItem.nome,
          price: formatPrice(Number(sellableItem.preco)),
        }),
      )

      history.push(DIRECTOR_INACTIVATE_PLAN, {
        sellableItems: sellableItemsMapped,
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
