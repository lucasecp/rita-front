import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './style'

const Socialplan = () => {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={warning} />
      <p>
        Para ter acesso a este serviço, você precisa contratar um Plano da Rita
        Saúde. &nbsp;
        <a
          href="https://ritasaude.com.br/rita-e-para-todos/"
          target="_blank"
          rel="noreferrer"
        >
          Clique aqui
        </a>
      </p>
      <ButtonPrimary onClick={() => closeModal()}>Ok</ButtonPrimary>
    </Container>
  )
}

export default Socialplan
