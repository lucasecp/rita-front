import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import OutlineButton from '@/components/Button/Outline'

const DifferentPlanLife = () => {
  const { closeModal } = useModal()
  return (
    <Container>
      <img src={warning} />
      <p>
        Este serviço não faz parte do seu pacote. Deseja atualizar seu plano da
        Rita? &nbsp;
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <a
          href="https://ritasaude.com.br/rita-e-para-todos/"
          target="_blank"
          rel="noreferrer"
        >
          Sim
        </a>
      </ButtonGroup>
    </Container>
  )
}

export default DifferentPlanLife
