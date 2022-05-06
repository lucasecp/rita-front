import React, { useEffect, useMemo } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

import { Container } from './styles'

export const Profile: React.FC = () => {
  const { user } = useAuth()

  const { photo, getProfilePhoto } = useProfilePhoto()

  useEffect(() => {
    getProfilePhoto()
  }, [])

  const initialName = useMemo(
    () => getInitialLetterName(user?.nome),
    [user?.nome],
  )

  return (
    <Container>
      {photo ? <img src={photo} alt="perfil" /> : <span>{initialName}</span>}
    </Container>
  )
}
