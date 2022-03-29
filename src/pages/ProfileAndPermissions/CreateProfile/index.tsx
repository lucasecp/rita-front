import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './styles'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PermissionsSelect } from './components/PermissionsSelect'
import ToConfirmCancel from './messages/ToConfirmCancel'
import InputText from '@/components/Form/InputText'
import OutilineButton from '@/components/Button/Outline'
import { toast } from '@/styles/components/toastify'

import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'
import apiUser from '@/services/apiUser'
import { profileAndPermissionsToApi } from './adapters/toApi'
import { profileAndPermissionsFromApi } from './adapters/fromApi'
import ButtonPrimary from '@/components/Button/Primary'

export const CreateProfile: React.FC = () => {
  document.title = 'Rita Saúde | Perfis - Incluir'

  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()

  const [oneProfileName, setOneProfileName] = useState('')
  const [oneProfileNameError, setOneProfileNameError] = useState('')

  const [profilesAndPermissions, setProfilesAndPermissions] = useState<any>([])

  const [checkedPermissions, setCheckedPermissions] = useState<any[]>([])

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        Loading.turnOn()

        const { data: profilesAndPermissions } = await apiUser.get(
          '/grupo-permissao',
        )

        for (const element of profilesAndPermissions.dados) {
          element.id = element.id + 'F'
        }

        const profilesAndPermissionsMapped = profileAndPermissionsFromApi(
          profilesAndPermissions,
        )

        setProfilesAndPermissions(profilesAndPermissionsMapped)
      } catch (error) {
        // console.log(error)
        // toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadProfiles()
  }, [])

  const nodeChecked = function () {
    // @ts-ignore
    setCheckedPermissions([...this.checkedNodes])
  }

  const onSaveProfile = async () => {
    if (!oneProfileName.length) {
      setOneProfileNameError('Nome é obrigatório')
      return window.scrollTo(0, 0)
    }
    if (oneProfileName.length < 3) {
      setOneProfileNameError('Mínimo de três caracteres')
      return window.scrollTo(0, 0)
    }
    if (oneProfileName.length > 100) {
      setOneProfileNameError('Máximo de 100 caracteres')
      return window.scrollTo(0, 0)
    }
    if (!checkedPermissions.length) {
      return toast.error('Deve haver pelo menos uma permissão associada')
    }

    try {
      Loading.turnOn()
      const profilePermissionsAndNamesMApped = profileAndPermissionsToApi(
        oneProfileName,
        checkedPermissions,
      )

      console.log(profilePermissionsAndNamesMApped)

      await apiUser.post(`/perfil`, profilePermissionsAndNamesMApped)
      toast.success('Cadastro realizado com sucesso.')
      history.push(DIRECTOR_SEE_ALL_PROFILES)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message)
      } else {
        if (error instanceof Error) {
          toast.error(error.message)
        }

        console.error(error)
      }
    } finally {
      Loading.turnOff()
    }
  }

  const onBackCreateProfile = () => {
    if (checkedPermissions.length > 0 || oneProfileName.length > 0) {
      return showMessage(ToConfirmCancel)
    } else {
      return history.push(DIRECTOR_SEE_ALL_PROFILES)
    }
  }

  return (
    <DefaultLayout title="Perfis - Incluir">
      <Container>
        <InputText
          value={oneProfileName}
          setValue={setOneProfileName}
          label="Nome do Perfil"
          msgError={oneProfileNameError}
        />
        <label htmlFor="Telas">Categoria</label>
        <PermissionsSelect
          permissions={profilesAndPermissions}
          nodeChecked={nodeChecked}
        />
        <footer>
          <OutilineButton onClick={onBackCreateProfile}>
            Cancelar
          </OutilineButton>
          <ButtonPrimary onClick={onSaveProfile}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
