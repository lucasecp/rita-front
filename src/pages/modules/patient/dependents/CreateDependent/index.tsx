import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { CancelAndExit } from './messages/CancelAndExit'
import { UserData } from './components/UserData'
import { UserAddress } from './components/UserAddress'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'

import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

import { Container } from './styles'

export const CreateDependent: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const [saveMessage, sendSaveMessage] = useMessage()

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const onCancelCreateDependent = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(PATIENT_DEPENDENTS)
  }

  return (
    <DefaultLayout title="Inclusão de Dependente">
      <Container>
        <UserData onGetAnyFieldsHasChanged={setAnyFieldsHasChanged} />
        <UserAddress />
        <footer>
          <OutlineButton onClick={onCancelCreateDependent}>
            Cancelar
          </OutlineButton>
          <ButtonPrimary onClick={sendSaveMessage}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
