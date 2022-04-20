import React, { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo/symbol.svg'

// import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useMenu } from '@/hooks/useMenu'
import { useAuth } from '@/hooks/login'

import { Container, HamburgerButton } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import { getInitialLetterName } from '../../helpers/getInitialLetterName'
import DropdownProfiles from './DropdownProfiles'
import { useToggle } from '../../../../../hooks/useToggle'
import { Profile } from './Profile'

export const Header: React.FC = () => {
  const { openMenu } = useMenu()

  const { clearDataLogout, user } = useAuth()

  const { photo, getProfilePhoto } = useProfilePhoto()

  const [show, toggleShow] = useToggle(false)

  useEffect(() => {
    getProfilePhoto()
  }, [])


  return (
    <Container>
      <Link to="/inicio">
        <img src={logo} />
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
