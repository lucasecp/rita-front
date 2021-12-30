import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import apiPatient from '@/services/apiPatient'

import { ActivateIcon } from './styles'

interface ActivateProps {
  status: string
  plan: {
    idPlano: number
  }
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  const CheckSellableItems = async () => {
    const data = await apiPatient.patch(`/plano/${plan.idPlano}/ativar`, {
      params: { confirmado: false },
    })
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
