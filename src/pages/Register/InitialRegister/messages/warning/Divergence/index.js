import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../../styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import { PRE_REGISTER } from '@/routes/constants/namedRoutes/routes'

function Divergence(data) {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToPreRegister = () => {
    closeModal()
    history.push(PRE_REGISTER, data)
  }
  return (
    <Container>
      <img src={WarningError} />
      <p>
        Desculpe! Seu cadastro apresentou divergência entre os dados digitados e
        documentos apresentados, deseja atualizar suas informações?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Divergence
