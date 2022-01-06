import React from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useAuth } from '@/hooks/login'

const DifferentPlanLife = () => {
  const { closeModal, showSimple } = useModal()
  const { Loading } = useLoading()
  const { user } = useAuth()
  const scheduleAppointment = async () => {
    try {
      Loading.turnOn()
      closeModal()
      const response = await apiPatient.post('/Atendimento', {
        idPaciente: user.id,
        idEspecialidade: 56,
        modalidade: 'T',
        dataInicio: new Date().toLocaleDateString(),
        idClinicaDesejada: 1,
        status: 'AB',
      })
      console.log(response)
      if (response.status === 201) {
        showSimple.success(
          'Em breve você receberá um telefonema de nossos Profissionais de Saúde',
        )
      }
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }
  return (
    <Container>
      <img src={warning} />
      <p>Agendar Consulta Médica &nbsp;</p>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={scheduleAppointment}>
          Agendar Consulta
        </ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default DifferentPlanLife
