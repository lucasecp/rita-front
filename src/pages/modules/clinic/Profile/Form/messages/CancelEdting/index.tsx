import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { ClinicEditContext } from '../../../Context/ClinicEditContext'
import { ErrorsI } from '../../../types'

interface CancelEdtingProps {
  setIsDisabled: (value: boolean) => void
  setError: (data: ErrorsI) => void
  setIsHashModificationField: (data: boolean) => void
}

const CancelEdting: React.FC<CancelEdtingProps> = ({
  setIsDisabled,
  setError,
  setIsHashModificationField,
}) => {
  const { closeModal } = useModal()

  const onCancelEdting = () => {
    setIsDisabled(true)
    setIsHashModificationField(false)
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
