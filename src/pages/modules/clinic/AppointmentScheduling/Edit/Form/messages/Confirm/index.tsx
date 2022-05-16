import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
// import { useHistory } from 'react-router-dom'
// import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import { DataToApiI } from '../../../types'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { toApi } from '../../../adapters'

interface ConfirmProps {
  idSpecialist: number | string
  data: DataToApiI & { specialtyName: string; specialistName: string }
}

const Confirm: React.FC<ConfirmProps> = ({ idSpecialist, data }) => {
  const { closeModal } = useModal()

  // const history = useHistory()

  const { Loading } = useLoading()

  const onSave = async () => {
    try {
      Loading.turnOn()

      const dataMaped = toApi({
        specialty: Number(data.specialty),
        cpf: data.cpf,
        date: data.date,
        time: data.time,
        title: '',
        origin: '',
        idPatient: data.idPatient,
        patientName: data.patientName,
      })

      await apiAdmin.post(
        `/clinica/59/medico/${idSpecialist}/agenda-pessoal`,
        dataMaped,
      )

      toast.success('Agendamento feito com sucesso')
    } catch (error) {
      toast.error(error.response.message || 'Erro ao agendar consulta')
    } finally {
      Loading.turnOff()

      closeModal()
    }
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Confirmar agendamento?</p>
      <h6>{data.patientName}</h6>
      <span>{data.cpf}</span>
      <h5>{data.specialtyName}</h5>
      <span>{data.specialistName}</span>
      <h5>{data.date}</h5>
      <span>{data.time.replace('-', 'às')}</span>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onSave}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Confirm
