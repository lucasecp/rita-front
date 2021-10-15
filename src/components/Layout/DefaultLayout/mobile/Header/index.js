import React from 'react'
import { Container, Hamburger, Profile } from './style'
import profileImg from '../../../../../assets/img/profile.png'
import { Link } from 'react-router-dom'
import notification from '../../../../../assets/icons/notification.svg'
import logo from '@/assets/logo/symbol.svg'
import { useMenu } from '../../../../../context/Menu'
import logoutIcon from '../../../../../assets/icons/logout.svg'
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
