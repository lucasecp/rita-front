import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import apiPatient from '@/services/apiPatient'

import { ActivateIcon } from './styles'
import { toast } from 'react-toastify'
import { DIRECTOR_ACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'
import { formatPrice } from '@/helpers/formatPrice'
import { useLoading } from '@/hooks/useLoading'

interface ActivateProps {
  status: string
  plan: {
    id: number
    name: string
  }
}
interface SellableItem {
  id: number
  nome: string
  preco: string
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { Loading } = useLoading()

  const CheckSellableItems = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(`/plano/${plan.id}/ativar`, {
        params: { confirmado: false },
      })

      if (!response.data.length) {
        toast.warning(
          'Para ativar um plano, é necessário que ele possua pelo menos um item vendável associado',
        )
        return
      }

      const sellableItemsMapped = response.data.map(
        (sellableItem: SellableItem) => ({
          name: sellableItem.nome,
          price: formatPrice(Number(sellableItem.preco)),
        }),
      )

      if (response.data.length) {
        history.push(DIRECTOR_ACTIVATE_PLAN, {
          sellableItems: sellableItemsMapped,
          plan: {
            id: plan.id,
            name: plan.name,
          },
        })
      }
    } catch (error) {
      toast.error(`Erro ao ativar o plano ${plan.name}`)
    } finally {
      Loading.turnOff()
    }
  }
  return (
    <CustomTooltip label="Ativar">
      <ActivateIcon
        hidden={
          status !== 'Inativo' &&
          status !== 'Suspenso' &&
          status !== 'Em digitação'
        }
        onClick={CheckSellableItems}
      />
    </CustomTooltip>
  )
}
