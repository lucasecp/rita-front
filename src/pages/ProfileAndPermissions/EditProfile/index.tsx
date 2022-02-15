import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory, useLocation } from 'react-router'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PermissionsSelect } from './components/PermissionsSelect'
import NoPermissionsCheckedWarning from './messages/NoPermissionsCheckedWarning'
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

  const [checkedPermissions, setCheckedPermissions] = useState([])

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

  console.log(anyFieldsHasChanged)

  const nodeChecked = function () {
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
      return showMessage(NoPermissionsCheckedWarning)
    }

    try {
      Loading.turnOn()
      const profilePermissionsAndNamesMApped = profileAndPermissionsToApi(
        oneProfileName,
        checkedPermissions,
      )
      await apiUser.put(`/perfil/${id}`, profilePermissionsAndNamesMApped)

      toast.success('Dados atualizados com sucesso.')
      history.push(DIRECTOR_SEE_ALL_PROFILES)
    } catch (error) {
      toast.error('Erro ao atualizar perfil e permissões')
      console.log('Erro ao atualizar perfil e permissões')
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
