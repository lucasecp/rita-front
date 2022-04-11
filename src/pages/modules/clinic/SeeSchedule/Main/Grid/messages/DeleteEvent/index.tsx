import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'

interface DesassociateProps {
  idDoctor: string
  idClinic: string
  idSchedule: string
  setMakeNewRequest: () => void
}

const DeleteEvent: React.FC<DesassociateProps> = ({
  idDoctor,
  idClinic,
  idSchedule,
  setMakeNewRequest,
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

      toast.success('Evento excluído com sucesso!')
    } catch (error) {
      toast.error('Erro ao excluir evento.')
    } finally {
      Loading.turnOff()
    }
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Confirma a exclusão desse evento ?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onDeleteEvent}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default DeleteEvent
