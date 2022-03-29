import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { MultiSelectOption } from '@/components/Form/MultSelect'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { FILTER_USERS } from '@/routes/constants/namedRoutes/routes'

import { UserData } from './components/UserData'
import { CancelAndExit } from './messages/CancelAndExit'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'

import { Container } from './styles'

export interface User {
  name: string
  status: string
  cpf: string
  email: string
  phone: string
  accessProfile: MultiSelectOption[]
}

export const CreateUser: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const [saveMessage, sendSaveMessage] = useMessage()

  const onCancelCreateUser = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(FILTER_USERS)
  }

  return (
    <DefaultLayout title="Dados do Usuário">
      <Container>
        <h2>Inclusão de Usuário</h2>
        <UserData
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          saveUser={saveMessage}
        />
        <footer>
          <OutlineButton onClick={onCancelCreateUser}>Cancelar</OutlineButton>
          <ButtonPrimary onClick={sendSaveMessage}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
