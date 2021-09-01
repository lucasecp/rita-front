import React from 'react'
import { Container, Hamburger, Profile } from './style'
import profileImg from '../../../../../assets/img/profile.png'
import { Link } from 'react-router-dom'
import notification from '../../../../../assets/icons/notification.svg'
import logo from '../../../../../assets/icons/logoSymbol.png'
import { useMenu } from '../../../../../context/Menu'
const HeaderMoble = () => {
  const {showMenu,setShowMenu} = useMenu();
  return (
    <Container>
    <Link>
      <img src={logo}/>
    </Link>
      <nav>
        <Link to="/">
          <Profile>
            <img src={profileImg} alt="perfil" />
          </Profile>
        </Link>
        <img src={notification} />
        <Hamburger onClick={()=> setShowMenu(!showMenu)}><span></span></Hamburger>
      </nav>
    </Container>
  )
}

export default HeaderMoble
