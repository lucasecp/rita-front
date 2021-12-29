import React, { useState } from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'

import { Container } from './styles'
import { toast } from '@/styles/components/toastify'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

interface ReasonUpdateProps {
  plan: {
    id: number
    name: string
  }
}

export const ReasonUpdate: React.FC<ReasonUpdateProps> = ({ plan }) => {
  const [reason, setReason] = useState('')
  const [reasonError, setReasonError] = useState('')
  const { closeModal, showSimple } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    setReasonError('')

    if (reason.length < 20) {
      return setReasonError('Informe 20 caracteres ou mais')
    }

    // call to api

    toast.success(`${plan.name} Suspenso.`)
    closeModal()
    history.push(DIRECTOR_SEE_PLAN_MANAGMENT)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Descreva o motivo da alteração:</h6>
      <Textarea
        label=""
        setValue={setReason}
        value={reason}
        limit={200}
        showCaractersInformation
        hasError={!!reasonError}
        messageError={reasonError}
      />
      <footer>
        <OutlineButton onClick={onDoNotProceed}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Confirmar</ButtonPrimary>
      </footer>
    </Container>
  )
}
