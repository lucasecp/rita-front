import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import apiPatient from '@/services/apiPatient'

interface ActivateProps {
  status: string
  plan: {
    idPlano: number
  }
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  console.log(plan)

  const CheckSellableItems = async () => {
    const data = await apiPatient.get(`/PATCH/plano/${plan.idPlano}`, {
      params: { confirmado: false },
    })

    console.log(data)
  }

  return (
    <CustomTooltip label="Ativar">
      <ActiveIcon onClick={CheckSellableItems} />
    </CustomTooltip>
  )
}
