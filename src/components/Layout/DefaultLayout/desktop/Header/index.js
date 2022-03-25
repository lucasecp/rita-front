import React, { useEffect, useMemo } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

// import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'
import { Container } from './styles'

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
      <div>
        <h1>{title || 'Como você precisa cuidar da sua saúde hoje?'}</h1>
        {children}
      </div>
      <nav>
        <p>
          Olá, {nameFormated}
          <div>
            {photo ? (
              <img src={photo} alt="perfil" />
            ) : (
              <span>{initialName}</span>
            )}
          </div>
        </p>
        {/* <LetterIcon /> */}
        <ExitIcon onClick={clearDataLogout} />
      </nav>
    </Container>
  )
}
