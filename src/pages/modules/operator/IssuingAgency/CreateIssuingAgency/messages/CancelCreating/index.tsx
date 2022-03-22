import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router';
import { OPERATOR_SEE_ALL_SPECIALTYS } from '@/routes/constants/namedRoutes/routes'

const CancelCreating: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onCancel = () => {
    closeModal()
    history.push(OPERATOR_SEE_ALL_SPECIALTYS)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onCancel}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default CancelCreating