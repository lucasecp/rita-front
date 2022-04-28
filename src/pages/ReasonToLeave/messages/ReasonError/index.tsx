import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'

export const ReasonError: React.FC = () => {
  const { closeModal } = useModal()

  const onConfirm = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Necessário informar o motivo que deseja sair da plataforma</p>

      <ButtonGroup>
        <ButtonPrimary onClick={onConfirm}>Ok</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
