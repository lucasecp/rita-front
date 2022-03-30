import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Container } from './styles'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory, useLocation } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PermissionsSelect } from './components/PermissionsSelect'
import ToConfirmCancel from './messages/ToConfirmCancel'
import InputText from '@/components/Form/InputText'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { toast } from '@/styles/components/toastify'

import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'
import apiUser from '@/services/apiUser'
import { profileAndPermissionsToApi } from './adapters/toApi'
import { arrayOfCheckedPermissions } from './adapters/fromApi'

export const EditProfile: React.FC = () => {
  document.title = 'Rita Saúde | Perfis - Edição'

  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()

  const { id, profilesAndPermissions, oneProfile } = useLocation().state || {}

  const [oneProfileName, setOneProfileName] = useState(oneProfile.name)
  const [oneProfileNameError, setOneProfileNameError] = useState('')

  const [checkedPermissions, setCheckedPermissions] = useState<any>([])

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(0)

  useEffect(() => {
    const arrayOfCheckedPermissionsToSet = arrayOfCheckedPermissions(
      profilesAndPermissions,
    )
    setCheckedPermissions(arrayOfCheckedPermissionsToSet)
  }, [])

  useEffect(() => {
    setAnyFieldsHasChanged(anyFieldsHasChanged + 1)
  }, [checkedPermissions, oneProfileName])

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  const nodeChecked = function () {
    // @ts-ignore
    setCheckedPermissions([...this.checkedNodes])
  }

  const onSaveEditProfile = async () => {
    if (anyFieldsHasChanged === 2) {
      return history.push(DIRECTOR_SEE_ALL_PROFILES)
    }

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
      await apiUser.put(`/perfil/${id}`, profilePermissionsAndNamesMApped)
      toast.success('Edição realizada com sucesso.')
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

  const onBackEditProfile = () => {
    if (anyFieldsHasChanged === 2) {
      return history.push(DIRECTOR_SEE_ALL_PROFILES)
    }

    if (anyFieldsHasChanged > 2) {
      return showMessage(ToConfirmCancel)
    }
  }

  return (
    <DefaultLayout title="Perfis - Edição">
      <Container>
        <InputText
          value={oneProfileName}
          setValue={setOneProfileName}
          label="Nome do Perfil"
          msgError={oneProfileNameError}
        />
        <label htmlFor="Telas">Categoria</label>
        {profilesAndPermissions.length && (
          <PermissionsSelect
            permissions={profilesAndPermissions}
            nodeChecked={nodeChecked}
          />
        )}
        <footer>
          <ButtonLink onClick={onBackEditProfile}>Cancelar</ButtonLink>
          <OutilineButton onClick={onSaveEditProfile}>Salvar</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
