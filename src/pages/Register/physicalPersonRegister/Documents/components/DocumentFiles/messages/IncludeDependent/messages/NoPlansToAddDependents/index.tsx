import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'
import { PHYSICAL_PERSON_REGISTER_PAYMENT } from '@/routes/constants/namedRoutes/routes'

export const NoPlansToAddDependents: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const onClose = () => {
    // finish register

    history.push(PHYSICAL_PERSON_REGISTER_PAYMENT)
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>No momento não temos planos para a inclusão de dependentes</p>
      <footer>
        <OutlineButton onClick={onClose}>Fechar</OutlineButton>
      </footer>
    </Container>
  )
}
