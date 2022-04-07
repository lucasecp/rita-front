import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { ErrorsI } from '../../../types'

interface CancelEdtingProps {
  setIsDisabled: (value: boolean) => void
  setError: (data: ErrorsI) => void
  setIsHashModificationField: (data: boolean) => void
  setIsHashModificationSelectAndMultSelect: (data: boolean) => void
}

const CancelEdting: React.FC<CancelEdtingProps> = ({
  setIsDisabled,
  setError,
  setIsHashModificationField,
  setIsHashModificationSelectAndMultSelect
}) => {
  const { closeModal } = useModal()

  const onCancelEdting = () => {
    setIsDisabled(true)
    setIsHashModificationField(false)
    setIsHashModificationSelectAndMultSelect(false)
    setError({} as ErrorsI)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onCancelEdting}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default CancelEdting
