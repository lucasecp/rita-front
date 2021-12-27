import CustomTooltip from '@/components/Tooltip'

import { SuspendIcon } from './styles'

interface SuspendProps {
  status: string
}

export const Suspend: React.FC<SuspendProps> = ({ status }) => {
  const onSuspendPlan = () => {
    console.log('onSuspendPlan')
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
