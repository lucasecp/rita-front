import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useAuth } from '@/hooks/login'

import { Container } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '../../helpers/getInitialLetterName'

export const Header = ({ title }) => {
  const { clearDataLogout, user } = useAuth()
  const [photo, getProfilePhoto] = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, [])

  return (
    <Container>
      <h1>{title || 'Page Title'}</h1>
      <nav>
        <Link to='/perfil'>
          Olá, {formatFirstLastName(user?.nome)}
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
      </nav>
    </Container>
  )
}
