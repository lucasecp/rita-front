import React from 'react'
import { Link } from 'react-router-dom'

import profileImg from '@/assets/img/profile.png'
import logo from '@/assets/logo/symbol.svg'

import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useMenu } from '@/hooks/useMenu'
import { useAuth } from '@/hooks/login'

import { Container, HamburgerButton } from './styles'

export const Header = () => {
  const { openMenu } = useMenu()
  const { clearDataLogout } = useAuth()

  return (
    <Container>
      <Link to="/inicio">
        <img src={logo} />
      </Link>
      <nav>
        <Link to="/perfil">
          <div>
            <img src={profileImg} alt="perfil" />
          </div>
        </Link>
        <LetterIcon />
        <ExitIcon onClick={clearDataLogout} />
        <HamburgerButton onClick={openMenu}>
          <span></span>
        </HamburgerButton>
      </nav>
    </Container>
  )
}
