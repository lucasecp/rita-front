import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from './styles'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import {
  PRE_REGISTER,
  REGISTER_PATIENT,
} from '@/routes/constants/namedRoutes/routes'

interface FoundProps {
  company: string
  cpf: string
  email: string
  phone: string
  status: string
}

export const Found: React.FC<FoundProps> = ({ cpf, company, email, phone }) => {
  const history = useHistory()
  const { closeModal } = useModal()

  const pushToRegister = () => {
    closeModal()
    return history.push(REGISTER_PATIENT, { userData: { cpf, company } })
  }
  const pushToPreRegister = () => {
    closeModal()
    history.push(PRE_REGISTER, { cpf, email, phone })
  }

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Foi localizado um cadastro no Cartão Sabin Saúde. Autoriza importar seus
        dados?
      </p>
      <ButtonGroup>
        <OutlineButton onClick={pushToRegister}>Não</OutlineButton>
        <ButtonPrimary onClick={pushToPreRegister}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
