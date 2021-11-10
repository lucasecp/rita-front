import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import profileImg from '@/assets/img/profile.png'

import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useAuth } from '@/hooks/login'

import { Container } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'

export const Header = ({ title }) => {
  const { clearDataLogout } = useAuth()
  const [photoApi,getProfilePhoto] = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, []);
  console.log(photoApi);

  return (
    <Container>
      <h1>{title || 'Page Title'}</h1>
      <nav>
        <Link to="/perfil">
          Olá, Fulano de Souza
          <div>
            <img src={profileImg} alt="perfil" />
          </div>
        </Link>
        <LetterIcon />
        <ExitIcon onClick={clearDataLogout} />
      </nav>
    </Container>
  )
}
