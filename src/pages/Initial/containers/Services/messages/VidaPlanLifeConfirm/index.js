import React, { useState, useEffect } from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import OutlineButton from '@/components/Button/Outline'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import formateDateAndHour from '@/helpers/formateDateAndHour'

const VidaPlanLifeConfirm = (data) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const [appointment, SetAppointment] = useState('')

  useEffect(() => {
    const Appointment = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get('/atendimento')
        SetAppointment(data.dataInicio)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }

    Appointment()
  }, [])

  return (
    <Container>
      <img src={warning} />
      <p>
        Você está na fila desde {formateDateAndHour(appointment)}, aguarde o
        atendimento.
      </p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Ok</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}

export default VidaPlanLifeConfirm
