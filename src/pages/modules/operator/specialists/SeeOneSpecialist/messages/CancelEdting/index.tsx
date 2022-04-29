import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { OPERATOR_SEE_ALL_SPECIALISTS } from '@/routes/constants/namedRoutes/routes'

const CancelEdting: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onCancelEdting = () => {
    closeModal()
    history.push(OPERATOR_SEE_ALL_SPECIALISTS)
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
