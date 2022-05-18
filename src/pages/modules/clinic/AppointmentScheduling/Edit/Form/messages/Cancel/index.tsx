import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { ErrorsI } from '../../../types'

interface CancelProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>

  setToggleNewRequest: React.Dispatch<React.SetStateAction<number>>

  setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>
}

const Cancel: React.FC<CancelProps> = ({
  setIsEditing,
  setToggleNewRequest,
  setErrors,
}) => {
  const { closeModal } = useModal()

  const onCancel = () => {
    setIsEditing(false)
    setToggleNewRequest(Math.random() * (10 - 3) + 3)
    setErrors({} as ErrorsI)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja cancelar a edição dos dados? </p>

      <ButtonGroup>
        <OutlineButton onClick={onCancel}>Sim</OutlineButton>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Cancel
