import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './style'

const DifferentPlanLife = () => {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={warning} />
      <p>
        Este serviço não faz parte do seu plano. Deseja Conhecer o CSD? &nbsp;
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

export default DifferentPlanLife
