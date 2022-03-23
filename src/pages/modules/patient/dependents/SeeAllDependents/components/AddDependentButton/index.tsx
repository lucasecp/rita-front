import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { LimitDependent } from './messages/LimitDependent'
import { useHistory } from 'react-router-dom'
import { PATIENT_ADD_DEPENDENT } from '@/routes/constants/namedRoutes/routes'
// import { useAuth } from '@/hooks/login'

interface AddDependentButtonProps {
  company?: string
  currentDependent: number
}

export const AddDependentButton: React.FC<AddDependentButtonProps> = ({
  company = '',
  currentDependent,
}) => {
  const { showMessage } = useModal()
  const history = useHistory()

  const limitOfDependents = 2
  const isPatientLinkedCompany = !!company

  const onAddDependent = () => {
    if (isPatientLinkedCompany && currentDependent >= limitOfDependents) {
      return showMessage(LimitDependent)
    }

    history.push(PATIENT_ADD_DEPENDENT)
  }

  return (
    <ButtonPrimary medium onClick={onAddDependent}>
      Incluir
    </ButtonPrimary>
  )
}
