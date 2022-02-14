import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import {
  profileAndPermissionsFromApi,
  profilesAndPermissionsWithCheckedFromApi,
  oneProfileFromApi,
} from './adapters/fromApi'
import InputText from '@/components/Form/InputText'
import {
  DIRECTOR_SEE_ALL_PROFILES,
  DIRECTOR_EDIT_PROFILE,
} from '@/routes/constants/namedRoutes/routes'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { PermissionsSelect } from './components/PermissionsSelect'

import { useHistory, useLocation } from 'react-router'
import { id } from 'date-fns/locale'

export const SeeOneProfile: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Perfis - Visualização'
  }, [])

  const { Loading } = useLoading()
  const history = useHistory()
  const { id } = useLocation().state || {}

  const [disabled, setDisabled] = useState(true)
  const [profilesAndPermissions, setProfilesAndPermissions] = useState([])
  const [oneProfile, setOneProfile] = useState({})

  useEffect(() => {
    if (!id) {
      history.push(DIRECTOR_SEE_ALL_PROFILES)
      return
    }

    const loadProfiles = async () => {
      try {
        Loading.turnOn()

        const { data: profilesAndPermissions } = await apiUser.get(
          '/grupo-permissao',
        )

        for (const element of profilesAndPermissions.dados) {
          element.id = element.id + 'F'
        }

        // profilesAndPermissions.array.forEach((element) => {
        //   element.id = element.id + 2
        // })

        const profilesAndPermissionsMapped = profileAndPermissionsFromApi(
          profilesAndPermissions,
        )

        const { data: oneProfileAndItsPermissions } = await apiUser.get(
          `/perfil/${id}`,
        )

        const oneProfileFromApiMapped = oneProfileFromApi(
          oneProfileAndItsPermissions,
        )

        setOneProfile(oneProfileFromApiMapped)

        const profilesAndPermissionsWithCheckedMapped =
          profilesAndPermissionsWithCheckedFromApi(
            profilesAndPermissionsMapped,
            oneProfileAndItsPermissions,
          )

        setProfilesAndPermissions(profilesAndPermissionsWithCheckedMapped)
      } catch (error) {
        // console.log(error)
        // toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadProfiles()
  }, [])

  return (
    <DefaultLayout title="Perfis - Visualização">
      <Container>
        <InputText value={oneProfile.name} label="Nome do Perfil" disabled />
        <label htmlFor="categorias">Categoria</label>
        {profilesAndPermissions.length && (
          <PermissionsSelect
            permissions={profilesAndPermissions}
            disabled={disabled}
          />
        )}
        <footer>
          <ButtonLink onClick={() => history.push(DIRECTOR_SEE_ALL_PROFILES)}>
            Voltar
          </ButtonLink>
          <OutilineButton
            onClick={() =>
              history.push(DIRECTOR_EDIT_PROFILE, {
                id,
                profilesAndPermissions,
                oneProfile,
              })
            }
          >
            Editar
          </OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
