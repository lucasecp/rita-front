import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import { LimitDependent } from './messages/LimitDependent'
// import { useAuth } from '@/hooks/login'

interface AddDependentButtonProps {
  company: string
  currentDependent: number
}

export const AddDependentButton: React.FC<AddDependentButtonProps> = ({
  company,
  currentDependent,
}) => {
  const { showMessage } = useModal()
  // const { user } = useAuth()

  const limitOfDependents = 2
  const isPatientLinkedCompany = !!company

  const onAddDependent = () => {
    if (isPatientLinkedCompany && currentDependent >= limitOfDependents) {
      return showMessage(LimitDependent)
    }

    console.log('Redirecionar para pagina de adicionar um novo dependente')
  }

  return (
    <ButtonPrimary medium onClick={onAddDependent}>
      Incluir
    </ButtonPrimary>
  )
}
