import React, { useState } from 'react'
import axios from 'axios'

import warningIcon from '@/assets/icons/alerts/warning.svg'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { useHistory } from 'react-router'

import { Container } from './styles'
import apiUser from '@/services/apiUser'
import { toast } from '@/styles/components/toastify'
import {
  DIRECTOR_SEE_ALL_PROFILES,
  INITIAL_PAGE,
} from '@/routes/constants/namedRoutes/routes'
interface PropsReasonToDelete {
  setReasonToDelete: () => any
}

interface ResponseProps {
  id: number
}

export const ReasonToDeleteModal: React.FC<ResponseProps> = ({
  id,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const [reasonError, setReasonError] = useState('')
  const [reason, setReason] = useState('')

  const DeleteProfile = async () => {
    try {
      Loading.turnOn()

      await apiUser.delete(`/perfil/${id}?motivo=${reason}`)

      history.push(INITIAL_PAGE)
      history.push(DIRECTOR_SEE_ALL_PROFILES)
      toast.success('Perfil Excluído com sucesso')
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data)
      } else {
        if (error instanceof Error) {
          toast.error(error.message)
        }

        console.error(error)
      }
    } finally {
      Loading.turnOff()
    }
  }

  const onProceed = async () => {
    setReasonError('')
    if (reason.length < 20) {
      return setReasonError('Necessário o mínimo de 20 caracteres')
    }
    closeModal()

    return DeleteProfile()
  }

  const onDoNotProceed = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Descreva o motivo:</h6>
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
