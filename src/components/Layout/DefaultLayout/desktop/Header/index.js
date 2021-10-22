import React from 'react'
import { Profile, HeaderLayout } from './style'
import { Link,useHistory } from 'react-router-dom'

import profileImg from '@/assets/img/profile.png'
import logoutIcon from '@/assets/icons/logout.svg'
import notification from '@/assets/icons/notification.svg'
import {LOGIN} from '@/routes/constants/namedRoutes/routes'
import { useAuth } from '@/hooks/login'
const Header = ({ title }) => {
  const { logout } = useAuth()
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push(LOGIN)
  }

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
        <img src={logoutIcon} onClick={handleLogout} />
      </nav>
    </HeaderLayout>
  )
}

export default Header
