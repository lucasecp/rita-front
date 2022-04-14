import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup, Content } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { ScheduleI } from '../../../../types'
import { mapDaysPortugues } from '../../../../adapters/mapDays'

interface DesassociateProps {
  idSchedule: string,
  data?: ScheduleI,
  setMakeNewRequest: () => void
}

const DeleteEvent: React.FC<DesassociateProps> = ({ idSchedule, setMakeNewRequest, data }) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()

  const onDeleteEvent = async () => {
    try {
      Loading.turnOn()
      await apiAdmin.delete(`/medico/agenda/${idSchedule}`)
      setMakeNewRequest()

      toast.success('Horário de atendimento removido com sucesso!')
    } catch (error) {
      toast.error('Erro ao excluir o horário de atendimento, tente novamente, se o problema persistir, entre em contato com o suporte técnico do sistema.')
    } finally {
      Loading.turnOff()
    }
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Confirma a exclusão do registro ?</p>
      <Content>
        <p>{data.clinicName}</p>
        <p>{data.specialtys[0].name}</p>
        <p>{mapDaysPortugues(data.day)}</p>
        <p>{data.start} as {data.end}</p>
      </Content>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onDeleteEvent}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default DeleteEvent
