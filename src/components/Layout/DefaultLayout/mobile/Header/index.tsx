import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useMenu } from '@/hooks/useMenu'
import { useAuth } from '@/hooks/login'

import { Container, HamburgerButton } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import { useToggle } from '../../../../../hooks/useToggle'
import { Profile } from './Profile'
import { ReactComponent as IconLogo } from '@/assets/logo/symbol.svg'

export const Header: React.FC = () => {
  const { openMenu } = useMenu()

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
        {/* <LetterIcon /> */}
        <ExitIcon onClick={clearDataLogout} />
        <HamburgerButton onClick={openMenu}>
          <span></span>
        </HamburgerButton>
      </nav>
    </Container>
  )
}
