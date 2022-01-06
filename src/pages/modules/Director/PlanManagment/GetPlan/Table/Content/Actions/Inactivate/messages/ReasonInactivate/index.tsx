import React, { useState } from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { toast } from '@/styles/components/toastify'

import { Container } from './styles'
import apiPatient from '@/services/apiPatient'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

interface ReasonInactivateProps {
  plan: {
    id: string
    name: string
  }
}

export const ReasonInactivate: React.FC<ReasonInactivateProps> = ({ plan }) => {
  const [reason, setReason] = useState('')
  const [reasonError, setReasonError] = useState('')
  const { closeModal } = useModal()
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

    try {
      Loading.turnOn()

      const {
        data: { mensagem: message },
      } = await apiPatient.patch(`/plano/${plan.id}/inativar`, null, {
        params: {
          confirmado: true,
          motivo: reason,
        },
      })

      if (message === 'Sucesso') {
        toast.success(`Plano ${plan.name} inativado`)
      }
    } catch (error) {
      toast.error(`Erro ao inativar o plano ${plan.name}`)
    } finally {
      Loading.turnOff()
    }

    setReason('')
    closeModal()
    history.push(DIRECTOR_PLAN_MANAGMENT)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Descreva o motivo da alteração:</h6>
      <Textarea
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
