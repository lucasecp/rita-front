import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { CancelAndExit } from './messages/CancelAndExit'

import { useModal } from '@/hooks/useModal'

import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

import { UserInformations } from './components/UserInformations'
import { UserAddress } from './components/UserAddress'

import { DependentData, DependentAddress } from './types/index'

import { useMessage } from '@/hooks/useMessage'

import { Container } from './styles'

export const CreateDependent: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const [saveMessage, sendSaveMessage] = useMessage()

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const [dependentData, setDependentData] = useState({} as DependentData)
  const [dependentAddress, setDependentAddress] = useState(
    {} as DependentAddress,
  )

  const onCancelCreateDependent = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(PATIENT_DEPENDENTS)
  }

  const onCreateDependent = useCallback(() => {
    sendSaveMessage()
    console.log('------------------------')
    console.log('CLICOU SALVAR')

    if (saveMessage) {
      console.log('Salvar')
      console.log('Data: ', dependentData)
      console.log('Address: ', dependentAddress)
    }
  }, [saveMessage])

  console.log(dependentData)

  return (
    <DefaultLayout title="Inclusão de Dependente">
      <Container>
        <UserInformations
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setDependentData={setDependentData}
          saveDependent={saveMessage}
        />
        <UserAddress
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setAddress={setDependentAddress}
        />
        <footer>
          <OutlineButton onClick={onCancelCreateDependent}>
            Cancelar
          </OutlineButton>
          <ButtonPrimary onClick={onCreateDependent}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
