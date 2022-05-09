import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'
import { toast } from '@/styles/components/toastify'

import apiUser from '@/services/apiUser'

import { User } from '../../index'
import { Container } from './styles'

interface ActivateUserProps {
  userData: User
  onGetChangeStatusMessage: () => void
}

export const ActivateUser: React.FC<ActivateUserProps> = ({
  userData,
  onGetChangeStatusMessage,
}) => {
  const { Loading } = useLoading()

  const onActivateUser = async () => {
    try {
      Loading.turnOn()

      await apiUser.patch(`/usuario/${userData.id}/ativar`)

      toast.success(`Usuário ${userData.name} ativado com sucesso`)

      onGetChangeStatusMessage()
    } catch {
      toast.error('Erro ao ativar usuário.')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <CustomTooltip label="Ativar">
        <ActivateIcon onClick={onActivateUser} />
      </CustomTooltip>
    </Container>
  )
}
