import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import apiPatient from '@/services/apiPatient'

import { ActivateIcon } from './styles'
import { toast } from 'react-toastify'
import { DIRECTOR_EDIT_PLAN_CONFIRM } from '@/routes/constants/namedRoutes/routes'

interface ActivateProps {
  status: string
  plan: {
    idPlano: number
  }
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  let sellableItems: any[] = []
  // call to api
  sellableItems = [
    { id: 1, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 2, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
  ]

  const CheckSellableItems = async () => {
    const data = await apiPatient.patch(`/plano/${plan.idPlano}/ativar`, {
      params: { confirmado: false },
    })

    console.log(data.data, "data")

    if (!data.data.length) {
      return toast.warning(
        'Para ativar um plano, é necessário que ele possua pelo menos um item vendável associado',
      )
    }

    if (data.data.length) {
      return history.push(DIRECTOR_EDIT_PLAN_CONFIRM, {
        plan: plan,
        sellableItems, //Precisando do ID para o index
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
