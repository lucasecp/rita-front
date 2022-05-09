import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

import { NoPlansToAddDependents } from './messages/NoPlansToAddDependents'
import { SelectedPlanDontAllowAddDependents } from './messages/SelectedPlanDontAllowAddDependents'
import { usePhysicalPersonRegister } from '@/pages/Register/physicalPersonRegister/shared/hooks'

import { PHYSICAL_PERSON_REGISTER_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

export const IncludeDependent: React.FC = () => {
  const { closeModal, showMessage } = useModal()
  const history = useHistory()
  const { finishRegister } = usePhysicalPersonRegister()

  // remove static values
  const planSelectedAllowsDependent = true
  const hasPlanTheAllowsDependentInRegion = true

  const onNotIncludeDependent = () => {
    finishRegister()
  }

  const onIncludeDependent = async () => {
    if (planSelectedAllowsDependent) {
      history.push(PHYSICAL_PERSON_REGISTER_DEPENDENTS)

      closeModal()
      return
    }

    // checkRangeRegion
    // planos/itens-vendaveis

    if (hasPlanTheAllowsDependentInRegion) {
      showMessage(SelectedPlanDontAllowAddDependents)
      return
    }

    showMessage(NoPlansToAddDependents)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja incluir seus dependentes?</p>
      <footer>
        <OutlineButton onClick={onNotIncludeDependent}>Não</OutlineButton>
        <ButtonPrimary onClick={onIncludeDependent}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
