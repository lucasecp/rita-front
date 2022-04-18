import React, { useEffect, useMemo, useState, useRef } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

import { Container } from './styles'
import DropdownProfiles from '../DropdownProfiles'
import { useToggle } from '../../../../../../hooks/useToggle'
import { profilesColors, profilesLabel } from '../../../static/profiles'
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down-select.svg'

export const Profile: React.FC = () => {
  const [currentProfile, setCurrentProfile] = useState('')

  const { user } = useAuth()

  const { photo, getProfilePhoto } = useProfilePhoto()

  const [show, toggleShow] = useToggle(false)

  useEffect(() => {
    getProfilePhoto()
  }, [])

  const initialName = useMemo(
    () => getInitialLetterName(user?.nome),
    [user?.nome],
  )

  useEffect(() => {
    setCurrentProfile(
      user.profileChosen || profilesLabel[user?.area[0]?.grupoPerfil] || '',
    )
  }, [user])

  return (
    <Container
      onClick={toggleShow}
      isActive={show}
      color={profilesColors[currentProfile]}
    >
      {photo ? <img src={photo} alt="perfil" /> : <span>{initialName}</span>}
      <DropdownProfiles show={show} setShow={toggleShow} />
    </Container>
  )
}
