import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

import { NoHasPlansAvailableQuantity } from '../NoHasPlansAvailableQuantity'

import { PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN } from '@/routes/constants/namedRoutes/routes'

import { Container } from './styles'

interface UpgradePlanQuantityProps {
  hasCoverage: boolean
  limitDependentsPlan: number
}

export const UpgradePlanQuantity: React.FC<UpgradePlanQuantityProps> = ({
  hasCoverage,
  limitDependentsPlan,
}) => {
  const history = useHistory()
  const { patientWantsMinimumDependent } = usePhysicalPersonRegister()
  const { showMessage, closeModal } = useModal()

  const onAcceptUpgradePlanQuantity = () => {
    if (hasCoverage) {
      patientWantsMinimumDependent.set(limitDependentsPlan + 1)
      closeModal()
      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)
    } else {
      showMessage(NoHasPlansAvailableQuantity)
    }
  }

  const onRejectUpgradePlanQuantity = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />

      <p>
        Você só pode adicionar {limitDependentsPlan} dependentes
        <br />
        Deseja fazer um upgrade de plano?
      </p>

      <footer>
        <OutlineButton
          onClick={onRejectUpgradePlanQuantity}
          data-test="rejectUpgradePlanQuantityButton"
        >
          Não
        </OutlineButton>
        <ButtonPrimary
          onClick={onAcceptUpgradePlanQuantity}
          data-test="acceptUpgradePlanQuantityButton"
        >
          Sim
        </ButtonPrimary>
      </footer>
    </Container>
  )
}