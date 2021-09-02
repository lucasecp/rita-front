import React from 'react'
import { Profile } from './style'
import { Link } from 'react-router-dom'
import profileImg from '../../../../assets/img/profile.png'
import logout from '../../../../assets/icons/logout.svg'
import notification from '../../../../assets/icons/notification.svg'
   

const Header = () => {
  return (
      <Header>
        <h1>Page Title</h1>
        <nav>
          <Link to='/'>
            Olá, Fulano de Souza
            <Profile >
              <img src={profileImg} alt="perfil" />
            </Profile>
          </Link>
          <img src={notification} />
          <img src={logout} />
        </nav>
      </Header>
  )
}

export default Header
