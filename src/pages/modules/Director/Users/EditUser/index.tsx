import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { MultiSelectOption } from '@/components/Form/MultSelect'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { UserData } from './components/UserData'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'
import { CancelAndExit } from './messages/CancelAndExit'
import { FILTER_USERS } from '@/routes/constants/namedRoutes/routes'

export interface User {
  id: number
  name: string
  status: string
  cpf: string
  email: string
  phone: string
  accessProfile: MultiSelectOption[]
}

export const EditUser: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()

  const { user: initialUser } = useLocation<{ user: User }>().state || {}

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const [saveMessage, sendSaveMessage] = useMessage()

  useEffect(() => {
    if (!initialUser) {
      history.push(FILTER_USERS)
    }
  }, [])

  const onCancelEditing = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(FILTER_USERS)
  }

  return (
    <DefaultLayout title="Visualizar e Editar Usuários">
      <Container>
        <h2>Dados do Usuário</h2>
        <UserData
          initialUser={initialUser}
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          saveUser={saveMessage}
        />
        <footer>
          <OutlineButton onClick={onCancelEditing}>Cancelar</OutlineButton>
          <ButtonPrimary onClick={sendSaveMessage}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
