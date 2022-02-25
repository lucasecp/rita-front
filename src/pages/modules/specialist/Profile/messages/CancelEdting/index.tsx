import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
interface CancelEdtingProps {
  setEdting: (value: boolean) => void
  setFieldWasChanged: (value: boolean) => void
}

const CancelEdting: React.FC<CancelEdtingProps> = ({
  setEdting,
  setFieldWasChanged,
}) => {
  const { closeModal } = useModal()

  const onCancelEdting = () => {
    setEdting(false)
    setFieldWasChanged(false)
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
