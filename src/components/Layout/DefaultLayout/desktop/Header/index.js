import React, { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'

import { useAuth } from '@/hooks/login'

import { Container } from './styles'
import useProfilePhoto from '../../hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '../../helpers/getInitialLetterName'

export const Header = ({ title, children }) => {
  const { clearDataLogout, user } = useAuth()
  const [photo, getProfilePhoto] = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, [])

  const nameFormated = useMemo(
    () => formatFirstLastName(user?.nome),
    [user?.nome],
  )

  const initialName = useMemo(
    () => getInitialLetterName(user?.nome),
    [user?.nome],
  )

  return (
    <Container>
      <h1>{title || 'Como você precisa cuidar da sua saúde hoje?'}</h1>
      {children}
      <nav>
        <Link to="/perfil">
          Olá, {nameFormated}
          <div>
            {photo ? (
              <img src={photo} alt="perfil" />
            ) : (
              <span>{initialName}</span>
            )}
          </div>
        </Link>
        {/* <LetterIcon /> */}
        <ExitIcon onClick={clearDataLogout} />
      </nav>
    </Container>
  )
}
