import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { NotHasSellableItems } from './messages/NotHasSellableItems'
import { formatPrice } from '@/helpers/formatPrice'

import { DIRECTOR_INACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'
import InactivateIcon from './styles'

interface InactivateProps {
  status: string
  plan: {
    id: string
    name: string
  }
}

export const Inactivate: React.FC<InactivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  const sellableItems = [
    { id: 1, nome: 'Plano 01', preco: '10' },
    { id: 2, nome: 'Plano 02', preco: '10' },
    { id: 3, nome: 'Plano 03', preco: '10' },
    { id: 4, nome: 'Plano 04', preco: '10' },
    { id: 5, nome: 'Plano 05', preco: '10' },
  ]

  // const sellableItems: any = []

  const onInactivePlan = () => {
    if (sellableItems.length) {
      // POSSUI ITENS VENDÁVEIS
      const sellableItemsMapped = sellableItems.map((sellableItem: any) => ({
        name: sellableItem.nome,
        price: formatPrice(Number(sellableItem.preco)),
      }))

      history.push(DIRECTOR_INACTIVATE_PLAN, {
        sellableItems: sellableItemsMapped,
        plan: {
          id: plan.id,
          name: plan.name,
        },
      })
    } else {
      // NÃO POSSUI ITENS VENDÁVEIS
      showMessage(NotHasSellableItems, {
        planId: plan.id,
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
