import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { ScheduleI } from '../../../../types/index'
import { daysLabel } from '../../../../constants/days'

interface DesassociateProps {
  idDoctor: string
  idClinic: string
  idSchedule: string
  setMakeNewRequest: () => void
  schedule: ScheduleI
}

const DeleteEvent: React.FC<DesassociateProps> = ({
  idDoctor,
  idClinic,
  idSchedule,
  setMakeNewRequest,
  schedule,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()

  const onDeleteEvent = async () => {
    try {
      Loading.turnOn()

      await apiAdmin.delete(
        `/clinica/${idClinic}/medico/${idDoctor}/agenda/${idSchedule}`,
      )
      setMakeNewRequest()

      toast.success('Horário excluído com sucesso!')
    } catch (error) {
      toast.error(error.response?.message || 'Erro ao excluir horário.')
    } finally {
      Loading.turnOff()
    }
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Confirma a exclusão desse horário ?</p>
      <p>{`${daysLabel[schedule.day]}, das ${schedule.start} às ${
        schedule.end
      }`}</p>
      <p>Clínica: {schedule.clinicName}</p>
      <p>Especialidade: {schedule.specialtys?.map((val) => ` ${val.name} `)}</p>

      <ButtonGroup>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
        <OutlineButton onClick={onDeleteEvent}>Sim</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}

export default DeleteEvent
