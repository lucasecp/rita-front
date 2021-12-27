import { useModal } from '@/hooks/useModal'
import CustomTooltip from '@/components/Tooltip'
import { VerifyIfHasSellableItems } from './messages/VerifyIfHasSellableItems'

import InactivateIcon from './styles'

interface InactivateProps {
  status: string
}

export const Inactivate: React.FC<InactivateProps> = ({ status }) => {
  const { showMessage } = useModal()

  const hasSellableItems = true

  const onInactivePlan = () => {
    if (hasSellableItems) {
      showMessage(
        VerifyIfHasSellableItems,
        {
          sellableItems: hasSellableItems,
        },
        true,
      )
      console.log('Tem itens vendáveis')
    } else {
      console.log('Não tem itens vendáveis')
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
