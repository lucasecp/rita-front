import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import {
  PRE_REGISTER,
  RESGISTE_PATIENT,
} from '@/routes/constants/namedRoutes/routes'

function ImportData(data) {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToRegister = () => {
    closeModal()
    history.push(RESGISTE_PATIENT, { userData: { cpf: data.cpf } })
  }
  const pushToPreRegister = () => {
    closeModal()
    history.push(PRE_REGISTER, data)
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>Autoriza importar seus dados cadastrais do Cartão Sabin Saúde?</p>
      <ButtonGroup>
        <OutlineButton onClick={pushToRegister}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default ImportData
