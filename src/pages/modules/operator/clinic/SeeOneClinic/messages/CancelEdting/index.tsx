import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { OPERATOR_SEE_ALL_CLINICS } from '@/routes/constants/namedRoutes/routes'

interface CancelEdtingProps {
  setEdting: (value: boolean) => void
  setFieldWasChanged: (value: boolean) => void
}

const CancelEdting: React.FC<CancelEdtingProps> = ({
  setEdting,
  setFieldWasChanged,
}) => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onContinueEdting = () => {
    setEdting(true)
    setFieldWasChanged(false)
    closeModal()
  }
  const onCancelEdting = () => {
    closeModal()
    history.push(OPERATOR_SEE_ALL_CLINICS) 
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>

      <ButtonGroup>
        <OutlineButton onClick={onContinueEdting}>Não</OutlineButton>
        <ButtonPrimary onClick={onCancelEdting}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default CancelEdting
