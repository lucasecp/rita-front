import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as InactivateIcon } from '@/assets/icons/inactivate-grid.svg'
import { toast } from '@/styles/components/toastify'

import apiUser from '@/services/apiUser'

import { User } from '../../index'
import {Container} from './styles'

interface InactivateUserProps {
  userData: User
  onGetChangeStatusMessage: () => void
}

export const InactivateUser: React.FC<InactivateUserProps> = ({
  userData,
  onGetChangeStatusMessage,
}) => {
  const { Loading } = useLoading()

  const onInactivateUser = async () => {
    try {
      Loading.turnOn()

      await apiUser.patch(`/usuario/${userData.id}/inativar`)

      toast.success(`Usuário ${userData.name} inativado com sucesso`)

      onGetChangeStatusMessage()
    } catch {
      toast.error('Erro ao inativar usuário.')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <CustomTooltip label="Inativar">
        <InactivateIcon onClick={onInactivateUser} />
      </CustomTooltip>
    </Container>
  )
}
