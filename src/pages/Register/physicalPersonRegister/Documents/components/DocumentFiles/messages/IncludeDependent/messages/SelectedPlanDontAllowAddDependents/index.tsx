import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'
import { PHYSICAL_PERSON_REGISTER_PAYMENT } from '@/routes/constants/namedRoutes/routes'
import { usePhysicalPersonRegister } from '@/pages/Register/physicalPersonRegister/shared/hooks'

export const SelectedPlanDontAllowAddDependents: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()
  const { finishRegister, patientWantsDependent } = usePhysicalPersonRegister()

  const onNotChooseOtherPlan = () => {
    finishRegister()

    history.push(PHYSICAL_PERSON_REGISTER_PAYMENT)
    closeModal()
  }

  const onChooseOtherPlan = () => {
    patientWantsDependent.set(true)

    history.push('/paciente/cadastro/escolher-plano')
    // history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)

    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Seu plano escolhido não possui a inclusão de dependentes <br />
        Deseja escolher outro plano?
      </p>
      <footer>
        <OutlineButton onClick={onNotChooseOtherPlan}>Não</OutlineButton>
        <ButtonPrimary onClick={onChooseOtherPlan}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
