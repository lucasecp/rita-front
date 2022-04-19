import React, { useEffect, useMemo, useState, useRef } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

import { Container } from './styles'
import DropdownProfiles from '../DropdownProfiles'
import { useToggle } from '../../../../../../hooks/useToggle'
import { profilesColors, profiles } from '../../../static/profiles'
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down-select.svg'

export const Profile: React.FC = () => {
  const { user, setDataLogin } = useAuth()

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
    const profilePermissions = user?.area.find(
      (profile) => profile.grupoPerfil === user.profileChosen,
      )
      const hasProfileChosen = user.profileChosen
      ? {}
      : { profileChosen: profiles[user?.area[0]?.grupoPerfil] || '' }
      
      console.log(profilePermissions?.permissoes || user?.area[0]?.permissoes)
    setDataLogin({
      ...user,
      ...hasProfileChosen,
      permissoes: profilePermissions?.permissoes || user?.area[0]?.permissoes,
    })
  }, [])

  return (
    <Container
      onClick={toggleShow}
      isActive={show}
      color={profilesColors[user.profileChosen]}
      onlyOneProfile={user?.area.length === 1}
    >
      {photo ? <img src={photo} alt="perfil" /> : <span>{initialName}</span>}
      <ArrowDown />
      <DropdownProfiles show={show} />
    </Container>
  )
}
