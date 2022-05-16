import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const StatusD: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={WarningError} />
      <p>
        O seu cadastro e o do titular estão sendo analisados.
        <br /> Pedimos que aguarde a aprovação pela nossa equipe.
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}
