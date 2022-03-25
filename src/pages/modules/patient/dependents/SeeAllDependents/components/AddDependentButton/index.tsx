import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { LimitDependent } from './messages/LimitDependent'
import { LimitDependentNotLinkCompany } from './messages/LimitDependentNotLinkCompany'
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

  const limitOfDependentsLinkedCompany = 2
  const limitOfDependentsNotLinkedCompany = 5
  const isPatientLinkedCompany = !!company

  const onAddDependent = () => {
    if (
      isPatientLinkedCompany &&
      currentDependent >= limitOfDependentsLinkedCompany
    ) {
      return showMessage(LimitDependent)
    }

    if (
      !isPatientLinkedCompany &&
      currentDependent >= limitOfDependentsNotLinkedCompany
    ) {
      return showMessage(LimitDependentNotLinkCompany)
    }

    history.push(PATIENT_ADD_DEPENDENT)
  }

  return (
    <ButtonPrimary medium onClick={onAddDependent}>
      Incluir
    </ButtonPrimary>
  )
}
