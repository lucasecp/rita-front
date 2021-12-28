import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { NotHasSellableItems } from './messages/NotHasSellableItems'

import InactivateIcon from './styles'

interface InactivateProps {
  status: string
}

export const Inactivate: React.FC<InactivateProps> = ({ status }) => {
  const { showMessage } = useModal()

  // const sellableItems = [
  //   { id: 1, item: 'Plano 01' },
  //   { id: 2, item: 'Plano 02' },
  // ]

  const sellableItems: any = []

  const onInactivePlan = () => {
    if (sellableItems.length) {
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
