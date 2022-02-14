import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { useHistory, useLocation } from 'react-router'

import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'
import apiUser from '@/services/apiUser'
import { profileAndPermissionsToApi } from './adapters/toApi'
import {
  arrayOfCheckedPermissions,
  checkedPermissionsWithoutFathersId,
} from './adapters/arrayOfCheckedPermissions'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { PermissionsSelect } from './components/PermissionsSelect'
import NoPermissionsCheckedWarning from './messages/NoPermissionsCheckedWarning'
import ToConfirmCancel from './messages/ToConfirmCancel'
import InputText from '@/components/Form/InputText'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { toast } from '@/styles/components/toastify'

export const EditProfile: React.FC = () => {
  document.title = 'Rita Saúde | Perfis - Edição'

  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()

  const { id } = useLocation().state || {}
  const { profilesAndPermissions } = useLocation().state || {}

  const { oneProfile } = useLocation().state || {}

  const initialOneProfileName = oneProfile.name
  const [oneProfileName, setOneProfileName] = useState(oneProfile.name)
  const [oneProfileNameError, setOneProfileNameError] = useState('')

  const [initialCheckedPermissions, setInitialCheckedPermissions] = useState([])
  const [checkedPermissions, setCheckedPermissions] = useState([])

  useEffect(() => {
    arrayOfCheckedPermissions(
      profilesAndPermissions,
      setInitialCheckedPermissions,
      setCheckedPermissions,
    )
  }, [])

  const nodeChecked = function () {
    setCheckedPermissions([...this.checkedNodes])
  }

  const save = () => {
    if (
      JSON.stringify(initialOneProfileName) ===
        JSON.stringify(oneProfileName) &&
      JSON.stringify(initialCheckedPermissions) ===
        JSON.stringify(checkedPermissionsWithoutFathersId(checkedPermissions))
    ) {
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

    const callApiToSave = async () => {
      try {
        Loading.turnOn()
        const ProfilePermissionsAndNAmesToSAve = profileAndPermissionsToApi(
          oneProfileName,
          checkedPermissionsWithoutFathersId(checkedPermissions),
        )
        await apiUser.put(`/perfil/${id}`, ProfilePermissionsAndNAmesToSAve)
      } catch (error) {
        console.log(error)
      } finally {
        history.push(DIRECTOR_SEE_ALL_PROFILES)
        Loading.turnOff()
        toast.success('Dados atualizados com sucesso.')
      }
    }
    // callApiToSave()
  }

  const cancel = () => {
    if (
      initialOneProfileName === oneProfileName &&
      initialCheckedPermissions === checkedPermissions
    ) {
      return history.push(DIRECTOR_SEE_ALL_PROFILES)
    }

    if (
      initialOneProfileName !== oneProfileName ||
      initialCheckedPermissions !== checkedPermissions
    ) {
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
        <label htmlFor="categorias">Categoria</label>
        {profilesAndPermissions.length && (
          <PermissionsSelect
            permissions={profilesAndPermissions}
            nodeChecked={nodeChecked}
          />
        )}
        <footer>
          <ButtonLink onClick={cancel}>Voltar</ButtonLink>
          <OutilineButton onClick={save}>Salvar</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
