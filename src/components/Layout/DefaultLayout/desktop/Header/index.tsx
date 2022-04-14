import React, { useEffect, useMemo } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

// import { ReactComponent as LetterIcon } from '@/assets/icons/letter.svg'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'

interface HeaderDesktopProps {
  title?: string
}

export const Header: React.FC<HeaderDesktopProps> = ({ title, children }) => {
  const { clearDataLogout, user } = useAuth()
  const { photo, getProfilePhoto } = useProfilePhoto()

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
        <h1>{title || ''}</h1>
        {children}
      </div>
      <nav>
        <p>
          Olá, {nameFormated}
          <span>
            {photo ? (
              <img src={photo} alt="perfil" />
            ) : (
              <span>{initialName}</span>
            )}
          </span>
        </p>
        {/* <LetterIcon /> */}
        <CustomTooltip label={'Sair'}>
          <ExitIcon onClick={clearDataLogout} />
        </CustomTooltip>
      </nav>
    </Container>
  )
}
