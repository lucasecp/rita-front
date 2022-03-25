import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const InformationsIncorrect: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Algumas informações estão incorretas
        <br />
        Preencha os campos em vermelho para continuar.
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
      </footer>
    </Container>
  )
}
