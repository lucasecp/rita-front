import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useAuth } from '@/hooks/login'

import { Container, HamburgerButton } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import { Profile } from './Profile'
import { ReactComponent as IconLogo } from '@/assets/logo/symbol.svg'

export const Header: React.FC = () => {
  const { clearDataLogout } = useAuth()

  const { getProfilePhoto } = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, [])

  return (
    <Container>
      <Link to="/inicio">
        <IconLogo />
      </Link>

      <nav>
        <Profile />
        <ExitIcon onClick={clearDataLogout} />
        <HamburgerButton>
          <span></span>
        </HamburgerButton>
      </nav>
    </Container>
  )
}
