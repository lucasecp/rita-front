import React from 'react'
import { Profile, HeaderLayout } from './style'
import { Link } from 'react-router-dom'

import profileImg from '@/assets/img/profile.png'
import logoutIcon from '@/assets/icons/logout.svg'
import notification from '@/assets/icons/notification.svg'

import { useAuth } from '@/hooks/login'
import apiPatient from '@/services/apiPatient'
const Header = ({ title }) => {
  const { logout, user } = useAuth()

  console.log(user)
  console.log(apiPatient.defaults.headers.token)

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