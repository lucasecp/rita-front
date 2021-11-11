import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo/symbol.svg'

import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useMenu } from '@/hooks/useMenu'
import { useAuth } from '@/hooks/login'

import { Container, HamburgerButton } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import { getInitialLetterName } from '../../helpers/getInitialLetterName'

export const Header = () => {
  const { openMenu } = useMenu()
  const { clearDataLogout, user } = useAuth()
  const [photo, getProfilePhoto] = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, [])


  return (
    <Container>
      <Link to="/inicio">
        <img src={logo} />
      </Link>
      <nav>
        <Link to="/perfil">
          <div>
            {photo ? (
              <img src={photo} alt="perfil" />
            ) : (
              <span>{getInitialLetterName(user?.nome)}</span>
            )}
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
