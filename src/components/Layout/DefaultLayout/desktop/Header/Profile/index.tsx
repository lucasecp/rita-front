import React, { useEffect, useMemo, useState, useRef } from 'react'

import { useAuth } from '@/hooks/login'
import useProfilePhoto from '@/components/Layout/DefaultLayout/hooks/useProfilePhoto'
import formatFirstLastName from '@/helpers/formatFirstLastName'
import { getInitialLetterName } from '@/components/Layout/DefaultLayout/helpers/getInitialLetterName'

import { ButtonProfile, Container } from './styles'
import DropdownProfiles from '../DropdownProfiles'
import { useToggle } from '../../../../../../hooks/useToggle'
import { profilesColors, profiles, profilesLabel } from '../../../../../../constants/profiles'
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down-select.svg'

export const Profile: React.FC = () => {
  const { user, setDataLogin } = useAuth()

  const { photo, getProfilePhoto } = useProfilePhoto()

  const [show, toggleShow] = useToggle(false)

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

  useEffect(() => {
    const profilePermissions = user?.area.find(
      (profile) => profile.grupoPerfil === user.profileChosen,
    )
    const hasProfileChosen = user.profileChosen
      ? {}
      : { profileChosen: profiles[user?.area[0]?.grupoPerfil] || '' }

    setDataLogin({
      ...user,
      ...hasProfileChosen,
      permissoes: profilePermissions?.permissoes || user?.area[0]?.permissoes ,
    })
  }, [])

  return (
    <Container>
      <ButtonProfile
        onClick={toggleShow}
        isActive={show}
        color={profilesColors[user.profileChosen]}
        onlyOneProfile={user?.area.length === 1}
      >
        <div>
          <div>
            <div>
              Olá, {nameFormated}
              <ArrowDown />
            </div>

            <p>Área {profilesLabel[user.profileChosen]}</p>
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
      <DropdownProfiles show={show} setShow={toggleShow} />
    </Container>
  )
}
