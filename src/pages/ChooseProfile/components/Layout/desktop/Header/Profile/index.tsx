import React, { useEffect, useMemo } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

import { ButtonProfile, Container } from './styles'

export const Profile: React.FC = () => {
  const { user } = useAuth()

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
      <ButtonProfile>
        <div>
          <div>
            <div>Olá, {nameFormated}</div>
          </div>

          <span>
            {photo ? (
              <img src={photo} alt="perfil" />
            ) : (
              <span>{initialName}</span>
            )}
          </span>
        </div>
      </ButtonProfile>
    </Container>
  )
}
