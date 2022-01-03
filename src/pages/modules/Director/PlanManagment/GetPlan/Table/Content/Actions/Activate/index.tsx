import CustomTooltip from '@/components/Tooltip'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import apiPatient from '@/services/apiPatient'

import { ActivateIcon } from './styles'
import { toast } from 'react-toastify'
import { DIRECTOR_ACTIVATE_PLAN } from '@/routes/constants/namedRoutes/routes'

interface ActivateProps {
  status: string
  plan: {
    idPlano: number
    nome: string
  }
}
interface SellableItem {
  id: number
  name: string
  price: string
}

export const Activate: React.FC<ActivateProps> = ({ status, plan }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  // const sellableItems: SellableItem[] = []
  // call to api

  const sellableItems: SellableItem[] = [
    // para testar. o sellableItem que deve ser enviado tem q ser retornado da api
    { id: 1, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 2, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 3, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 4, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 5, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 6, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 7, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 8, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 9, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
    { id: 10, name: 'Centro Oeste - Goiás (Estadual)', price: 'R$ 39,90' },
  ]

  const CheckSellableItems = async () => {
    const response = await apiPatient.patch(`/plano/${plan.idPlano}/ativar`, {
      params: { confirmado: false },
    })

    if (!response.data.length) {
      toast.warning(
        'Para ativar um plano, é necessário que ele possua pelo menos um item vendável associado',
      )
      return
    }

    if (response.data.length) {
      history.push(DIRECTOR_ACTIVATE_PLAN, {
        sellableItems, // passar o response.data quando resolver a questão do id
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
