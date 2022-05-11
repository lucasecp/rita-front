import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import ButtonPrimary from '@/components/Button/Primary'

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
        <ButtonPrimary onClick={onClose}>Fechar</ButtonPrimary>
      </footer>
    </Container>
  )
}
