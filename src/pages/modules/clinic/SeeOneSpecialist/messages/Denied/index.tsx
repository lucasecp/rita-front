import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { toast } from 'react-toastify'
interface DeniedProps {
  idDoctor: number
  idClinic: number
}

const Denied: React.FC<DeniedProps> = ({ idDoctor, idClinic }) => {
  const { closeModal } = useModal()
  const history = useHistory()
  const { Loading } = useLoading()

  const onDenied = async () => {
    try {
      Loading.turnOn()
      await apiAdmin.delete(
        `clinica/${idClinic}/medico/${idDoctor}?statusMedicoClinica=N`,
      )
      toast.success('Especialista negado com sucesso')
      history.push(CLINIC_SEE_ALL_SPECIALIST)
    } catch (error) {
      toast.error('Erro ao negar o especialista')
    } finally {
      Loading.turnOff()
    }
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja negar este usuário?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onDenied}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Denied
