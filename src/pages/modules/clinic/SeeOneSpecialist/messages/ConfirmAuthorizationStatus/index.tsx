import warningIcon from '@/assets/icons/alerts/warning.svg'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useAuth } from '@/hooks/login'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import React from 'react'
import { useHistory } from 'react-router'
import { SpecialistDataI } from '../../Types'
/** Styles */
import { ButtonGroup, Container } from './styles'

interface ConfirmAuthorizationStatusProps {
  specialistData: SpecialistDataI
}

const ConfirmAuthorizationStatus: React.FC<ConfirmAuthorizationStatusProps> = ({
  specialistData,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const { user } = useAuth()
  const history = useHistory()

  /** @description Atualiza o status para 'A' */
  const onAuthorizeSpecialist = async () => {
    try {
      Loading.turnOn()
      await apiAdmin.patch(
        `/clinica/${user.idClinica}/medico/${specialistData.id}?statusMedicoClinica=A`,
      )
      toast.success('Autorizado com sucesso!')

      closeModal()

      history.push(CLINIC_SEE_ALL_SPECIALIST)
    } catch (error) {
      toast.error(
        'Ops! Houve um erro ao tentar atualizar o status do especialista! Por favor, tente novamente.',
      )
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Deseja autorizar o especialista {specialistData.personalDatas.name} ?
      </p>

      <ButtonGroup>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
        <OutlineButton onClick={onAuthorizeSpecialist}>Sim</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}

export default ConfirmAuthorizationStatus
