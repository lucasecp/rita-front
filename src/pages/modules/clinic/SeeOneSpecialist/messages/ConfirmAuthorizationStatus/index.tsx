import React from 'react'
import { useModal } from '@/hooks/useModal'
import warningIcon from '@/assets/icons/alerts/warning.svg'
/** Styles */
import { Container, ButtonGroup } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { toast } from '@/styles/components/toastify'
import { SpecialistDataI } from '../../Types'
import { useAuth } from '@/hooks/login'

interface ConfirmAuthorizationStatusProps {
  specialistData: SpecialistDataI
}

const ConfirmAuthorizationStatus: React.FC<ConfirmAuthorizationStatusProps> = ({
  specialistData,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const { user } = useAuth()

  /** @description Atualiza o status para 'A' */
  const onAuthorizeSpecialist = async () => {
    try {
      Loading.turnOn()
      await apiAdmin.patch(
        `/clinica/${user.idClinica}/medico/${specialistData.id}?statusMedicoClinica=A`,
      )
      toast.success('Autorizado com sucesso!')
      closeModal()
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
