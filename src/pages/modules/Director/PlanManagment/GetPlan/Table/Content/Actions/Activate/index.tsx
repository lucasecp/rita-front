import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import apiPatient from '@/services/apiPatient'

import { ActivateIcon } from './styles'
import { toast } from 'react-toastify'
import { DIRECTOR_ACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'
import { formatPrice } from '@/helpers/formatPrice'

interface ActivateProps {
  status: string
  plan: {
    idPlano: number
    nome: string
  }
}
interface SellableItem {
  id: number
  nome: string
  preco: string
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  const CheckSellableItems = async () => {
    const response = await apiPatient.patch(`/plano/${plan.idPlano}/ativar`, {
      params: { confirmado: false },
    })

    const sellableItemsMapped = response.data.map(
      (sellableItem: SellableItem) => ({
        name: sellableItem.nome,
        price: formatPrice(Number(sellableItem.preco)),
      }),
    )

    if (!response.data.length) {
      toast.warning(
        'Para ativar um plano, é necessário que ele possua pelo menos um item vendável associado',
      )
      return
    }

    if (response.data.length) {
      history.push(DIRECTOR_ACTIVATE_PLAN, {
        sellableItems: sellableItemsMapped,
        plan: {
          id: plan.idPlano,
          name: plan.nome,
        },
      })
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
