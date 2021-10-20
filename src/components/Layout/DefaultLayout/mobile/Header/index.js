import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '@/assets/img/profile.png'
import notification from '@/assets/icons/notification.svg'
import logo from '@/assets/logo/symbol.svg'
import { useMenu } from '@/context/Menu'
import logoutIcon from '@/assets/icons/logout.svg'

import { Container, Hamburger, Profile } from './style'

import { useAuth } from '@/context/login'

const HeaderMobile = () => {
  const { showMenu, setShowMenu } = useMenu()
  const {logout} = useAuth()
  return (
    <Container>
      <Link>
        <img src={logo} />
      </Link>
      <nav>
        <Link to="#">
          <Profile>
            <img src={profileImg} alt="perfil" />
          </Profile>
        </Link>
        <img src={notification} />
        <img src={logoutIcon} onClick={logout}/>
        <Hamburger onClick={() => setShowMenu(!showMenu)}>
          <span></span>
        </Hamburger>
      </nav>
    </Container>
  )
}

export default HeaderMobile
