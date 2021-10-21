import React from 'react'
import { Profile, HeaderLayout } from './style'
import { Link } from 'react-router-dom'

import profileImg from '@/assets/img/profile.png'
import logoutIcon from '@/assets/icons/logout.svg'
import notification from '@/assets/icons/notification.svg'

import { useAuth } from '@/context/login'
const Header = ({ title }) => {
  const {logout} = useAuth()
  return (
    <HeaderLayout>
      <h1>{title || 'Page Title'}</h1>
      <nav>
        <Link to="/">
          Olá, Fulano de Souza
          <Profile>
            <img src={profileImg} alt="perfil" />
          </Profile>
        </Link>
        <img src={notification} />
        <img src={logoutIcon} onClick={logout} />
      </nav>
    </HeaderLayout>
  )
}

export default Header
