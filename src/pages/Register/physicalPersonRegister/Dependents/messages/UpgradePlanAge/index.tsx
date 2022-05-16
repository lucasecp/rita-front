import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

import { NoHasPlansAvailableAge } from '../NoHasPlansAvailableAge'

import { PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN } from '@/routes/constants/namedRoutes/routes'

import { Container } from './styles'

interface UpgradePlanAgeProps {
  hasCoverage: boolean
}

export const UpgradePlanAge: React.FC<UpgradePlanAgeProps> = ({
  hasCoverage,
}) => {
  const history = useHistory()
  const { planAllowDependentMajorAge } = usePhysicalPersonRegister()
  const { showMessage, closeModal } = useModal()

  const onAccepUpgradePlanAge = () => {
    if (hasCoverage) {
      planAllowDependentMajorAge.set(true)
      closeModal()
      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)
    } else {
      showMessage(NoHasPlansAvailableAge)
    }
  }

  const onRejectUpgradePlanAge = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />

      <p>
        Seu plano permite somente dependentes menores de idade
        <br />
        Deseja fazer um upgrade de plano?
      </p>

      <footer>
        <OutlineButton
          onClick={onRejectUpgradePlanAge}
          data-test="rejectUpgradePlanAgeButton"
        >
          Não
        </OutlineButton>
        <ButtonPrimary
          onClick={onAccepUpgradePlanAge}
          data-test="acceptUpgradePlanAgeButton"
        >
          Sim
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
