import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { CancelAndExit } from './messages/CancelAndExit'
import { InformationsIncorrect } from './messages/InformationsIncorrect'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'

import { PATIENT_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'

import { UserInformations } from './components/UserInformations'
import { UserAddress } from './components/UserAddress'

import { DependentData, DependentAddress } from './types/index'

import { Container } from './styles'

export const CreateDependent: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()
  const [errorMessageInformations, sendErrorMessageInformations] = useMessage()
  const [errorMessageAddress, sendErrorMessageAddress] = useMessage()

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(false)

  const [dependentData, setDependentData] = useState({} as DependentData)
  const [dependentAddress, setDependentAddress] = useState(
    {} as DependentAddress,
  )

  const [hasErrorInformations, setHasErrorInformations] = useState(false)
  const [hasErrorAddress, setHasErrorAddress] = useState(false)

  const onCancelCreateDependent = () => {
    if (anyFieldsHasChanged) {
      showMessage(CancelAndExit)
      return
    }

    history.push(PATIENT_DEPENDENTS)
  }

  const onCreateDependent = () => {
    sendErrorMessageInformations()
    sendErrorMessageAddress()

    if (hasErrorInformations || hasErrorAddress) {
      showMessage(InformationsIncorrect)
    } else {
      alert('Chama API')
      console.log('dependentData: ', dependentData)
      console.log('dependentAddress: ', dependentAddress)
    }
  }

  return (
    <DefaultLayout title="Inclusão de Dependente">
      <Container>
        <UserInformations
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setDependentData={setDependentData}
          checkHasError={errorMessageInformations}
          onGetHasError={setHasErrorInformations}
        />
        <UserAddress
          onGetAnyFieldsHasChanged={setAnyFieldsHasChanged}
          setAddress={setDependentAddress}
          checkHasError={errorMessageAddress}
          onGetHasError={setHasErrorAddress}
        />
        <footer>
          <OutlineButton onClick={onCancelCreateDependent}>
            Cancelar
          </OutlineButton>
          <ButtonPrimary onClick={onCreateDependent}>
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
