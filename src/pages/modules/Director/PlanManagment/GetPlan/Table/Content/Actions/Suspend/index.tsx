import CustomTooltip from '@/components/Tooltip'
import { DIRECTOR_SUSPEND_PLAN } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

import { SuspendIcon } from './styles'

interface SuspendProps {
  status: string
  idPlan: number
}

export const Suspend: React.FC<SuspendProps> = ({ status, idPlan }) => {
  const history = useHistory()

  const onSuspendPlan = () => {
    let sellableItems = []
    console.log(idPlan)
    // call to api
    sellableItems = [
      { id: 1, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
      { id: 2, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    ]
    // sellableItems = []
    if (sellableItems.length) {
      history.push(DIRECTOR_SUSPEND_PLAN)
    }
  }

  return (
    <CustomTooltip label="Suspender">
      <SuspendIcon
        hidden={status !== 'Inativo' && status !== 'Ativo'}
        onClick={onSuspendPlan}
      />
    </CustomTooltip>
  )
}
