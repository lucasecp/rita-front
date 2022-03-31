import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const LimitDependentNotLinkCompany: React.FC = () => {
  const { closeModal } = useModal()

  const onPressOk = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>O plano aceita até 5 dependentes</p>
      <footer>
        <ButtonPrimary onClick={onPressOk}>OK</ButtonPrimary>
      </footer>
    </Container>
  )
}
