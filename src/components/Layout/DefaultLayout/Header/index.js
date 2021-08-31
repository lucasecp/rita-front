import React from 'react'
import { Container, Profile } from './style'
import { Link } from 'react-router-dom'
import profileImg from '../../../../assets/img/profile.png'
import logout from '../../../../assets/icons/logout.svg'
import notification from '../../../../assets/icons/notification.svg'

import ContainerBox from '../../Content/ContainerBox'

const Header = () => {
  return (
    <ContainerBox>
      <Container>
        <h1>Page Title</h1>
        <nav>
          <Link >
            Olá, Fulano de Souza
            <Profile >
              <img src={profileImg} alt="perfil" />
            </Profile>
          </Link>
          <img src={notification} />
          <img src={logout} />
        </nav>
      </Container>
    </ContainerBox>
  )
}

export default Header
