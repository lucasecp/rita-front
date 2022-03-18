import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'

export const CancelSaving: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onContinueSaving = () => {
    closeModal()
  }
  const onCancelSaving = () => {
    closeModal()
    history.push(FILTER_SELLABLE_ITEMS)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>As informações não serão salvas. Confirma a saída?</p>

      <ButtonGroup>
        <OutlineButton onClick={onContinueSaving}>Não</OutlineButton>
        <ButtonPrimary onClick={onCancelSaving}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
