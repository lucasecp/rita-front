import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const LimitDependent: React.FC = () => {
  const { closeModal } = useModal()
  // const history = useHistory()

  const onPressOk = () => {
    closeModal()
  }

  // const onConfirmExit = async () => {
  //   closeModal()
  //   history.push(PATIENT_DEPENDENTS)
  // }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Permitido somente dois dependentes
        <br />
        Entre em contato com o RH da sua empresa
      </p>
      <footer>
        <ButtonPrimary onClick={onPressOk}>OK</ButtonPrimary>
      </footer>
    </Container>
  )
}
