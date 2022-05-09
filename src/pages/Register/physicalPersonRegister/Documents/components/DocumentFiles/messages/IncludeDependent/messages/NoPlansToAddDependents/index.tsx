import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'

import { Container } from './styles'
import { usePhysicalPersonRegister } from '@/pages/Register/physicalPersonRegister/shared/hooks'

export const NoPlansToAddDependents: React.FC = () => {
  const { finishRegister } = usePhysicalPersonRegister()

  const onClose = () => {
    finishRegister()
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
