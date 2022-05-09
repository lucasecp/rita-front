import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { NoHasPlansAvailable } from '../NoHasPlansAvailable'

import { Container } from './styles'

interface UpgradePlanProps {
  hasCoverage: boolean
  limitDependentsPlan: number
}

export const UpgradePlan: React.FC<UpgradePlanProps> = ({
  hasCoverage,
  limitDependentsPlan,
}) => {
  const history = useHistory()
  const { showMessage, closeModal } = useModal()

  const onAccepUpgradePlan = () => {
    if (hasCoverage) {
      // history.push(CHOOSE_PLAN)
    } else {
      showMessage(NoHasPlansAvailable)
    }
  }

  const onRejectUpgradePlan = () => {
    closeModal()
  }

  return (
    <Container>
      <h3>
        Você só pode adicionar {limitDependentsPlan} dependentes
        <br />
        Deseja fazer um upgrade de plano?
      </h3>

      <footer>
        <OutlineButton onClick={onRejectUpgradePlan}>Não</OutlineButton>
        <ButtonPrimary onClick={onAccepUpgradePlan}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
