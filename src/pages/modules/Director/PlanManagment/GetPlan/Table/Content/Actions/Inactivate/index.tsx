import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { NotHasSellableItems } from './messages/NotHasSellableItems'

import InactivateIcon from './styles'
import { DIRECTOR_INACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'

interface InactivateProps {
  status: string
}

export const Inactivate: React.FC<InactivateProps> = ({ status }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  // const sellableItems = [
  //   { id: 1, name: 'Plano 01', price: '10' },
  //   { id: 2, name: 'Plano 02', price: '10' },
  // ]

  const sellableItems: any = []

  const onInactivePlan = () => {
    if (sellableItems.length) {
      history.push(DIRECTOR_INACTIVATE_PLAN, { sellableItems })
      console.log('Tem itens vendáveis')
    } else {
      showMessage(
        NotHasSellableItems,
        {
          sellableItems,
        },
        true,
      )
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
