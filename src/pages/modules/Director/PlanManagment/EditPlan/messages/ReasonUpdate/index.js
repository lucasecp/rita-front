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

import apiPatient from '@/services/apiPatient'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

export const ReasonUpdate = ({ plan }) => {
  const [reason, setReason] = useState('')
  const [reasonError, setReasonError] = useState('')
  const { closeModal, showSimple } = useModal()
  const { Loading } = useLoading()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    setReasonError('')

    if (reason.length < 20) {
      return setReasonError('Informe 20 caracteres ou mais')
    }

    // alterou o status para ativo e não tem itens vendáveis associados?
    // if( && ){
    //   closeModal()
    //   toast.warning(
    //     'Para ativar um plano, é necessário que ele possua pelo menos um item vendável associado'
    //   )
    // }

    try {
      Loading.turnOn()

      // fazer o mapeamento das propriedades para mandar para o back
      const planMapped = plan

      const response = await apiPatient.put(`/plano/${plan.id}`, planMapped, {
        params: { confirmado: true, motivo: reason },
      })

      console.log(response)
      toast.success('Dados atualizados com sucesso.')

      history.push(DIRECTOR_SEE_PLAN_MANAGMENT, { idPlan: plan.id })
    } catch (error) {
      showSimple.error('Erro ao editar um plano!')
    } finally {
      Loading.turnOff()
    }
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
