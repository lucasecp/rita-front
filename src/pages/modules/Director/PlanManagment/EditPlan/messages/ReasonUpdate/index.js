import React, { useState } from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const ReasonUpdate = () => {
  const [reason, setReason] = useState('')
  const [reasonError, setReasonError] = useState('')
  const { closeModal } = useModal()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    setReasonError('')
    if (reason.length < 20) {
      return setReasonError('Informe 20 caracteres ou mais')
    }
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Descreva o motivo da alteração:</h6>
      <Textarea
        setValue={setReason}
        value={reason}
        limit={150}
        hasError={!!reasonError}
        messageError={reasonError}
      />
      <p>
        <span>Mínimo 20 caracteres</span>
      </p>

      <footer>
        <OutlineButton onClick={onDoNotProceed}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Confirmar</ButtonPrimary>
      </footer>
    </Container>
  )
}
