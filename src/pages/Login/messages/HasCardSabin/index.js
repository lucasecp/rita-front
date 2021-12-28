import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { ButtonGroup, Container } from '../style'

import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import OutlineButton from '@/components/Button/Outline'
import {
  DEFAULT_REGISTER,
  REGISTER_CARD_SABIN,
} from '@/routes/constants/namedRoutes/routes'

function HasCardSabin() {
  const history = useHistory()
  const { closeModal } = useModal()
  const pushToPreRegister = () => {
    closeModal(false)
    history.push(DEFAULT_REGISTER)
  }
  const pushToCardSabin = () => {
    closeModal(false)
    history.push(REGISTER_CARD_SABIN)
  }
  return (
    <Container>
      <img src={warning} />
      <p>Possui cartão sabin?</p>
      <ButtonGroup>
        <OutlineButton onClick={pushToPreRegister}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToCardSabin}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default HasCardSabin
