import React from 'react'

import logo from '@/assets/logo/logo-animated-without-background.gif'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container, TitleAndLogo } from './styles'

export const AddUserOnWaitList: React.FC = () => {
  return (
    <Container>
      <TitleAndLogo>
        <h6>
          <img src={logo} />
          Informe, por favor, o motivo pelo qual você deseja sair da plataforma
        </h6>
      </TitleAndLogo>

      {/* <footer>
        <OutlineButton onClick={onCancelCreateUser}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={sendSaveMessage}>Salvar</ButtonPrimary>
      </footer> */}
    </Container>
  )
}
