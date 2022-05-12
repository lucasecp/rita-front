import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

import { NoHasPlansAvailable } from '../NoHasPlansAvailable'

import { PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN } from '@/routes/constants/namedRoutes/routes'

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
  const { patientWantsMinimumDependent } = usePhysicalPersonRegister()
  const { showMessage, closeModal } = useModal()

  const onAccepUpgradePlan = () => {
    if (hasCoverage) {
      patientWantsMinimumDependent.set(limitDependentsPlan + 1)
      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)
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
        <OutlineButton
          onClick={onRejectUpgradePlan}
          data-test="rejectUpgradePlanButton"
        >
          Não
        </OutlineButton>
        <ButtonPrimary
          onClick={onAccepUpgradePlan}
          data-test="acceptUpgradePlanButton"
        >
          Sim
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
