import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { LimitDependent } from './messages/LimitDependent'
// import { useAuth } from '@/hooks/login'

interface AddDependentButtonProps {
  currentDependent: number
}

export const AddDependentButton: React.FC<AddDependentButtonProps> = ({
  currentDependent,
}) => {
  const { showMessage } = useModal()
  // const { user } = useAuth()

  const limitOfDependents = 2
  const isPatientLinkedCompany = true

  const onAddDependent = () => {
    if (isPatientLinkedCompany && currentDependent >= limitOfDependents) {
      return showMessage(LimitDependent)
    }
  }

  return (
    <ButtonPrimary medium onClick={onAddDependent}>
      Incluir
    </ButtonPrimary>
  )
}
