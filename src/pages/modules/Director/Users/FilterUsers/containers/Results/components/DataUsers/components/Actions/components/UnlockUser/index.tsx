import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'
import { toast } from '@/styles/components/toastify'

import apiUser from '@/services/apiUser'

import { User } from '../../index'

interface UnlockUserProps {
  userData: User
  onGetChangeStatusMessage: () => void
}

export const UnlockUser: React.FC<UnlockUserProps> = ({
  userData,
  onGetChangeStatusMessage,
}) => {
  const { Loading } = useLoading()

  const onUnlockUser = async () => {
    try {
      Loading.turnOn()

      await apiUser.patch(`/usuario/${userData.id}`, {
        bloqueado: 'N',
      })

      toast.success(`Usuário ${userData.name} desbloqueado com sucesso`)

      onGetChangeStatusMessage()
    } catch {
      toast.error('Erro ao desbloquear usuário.')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <CustomTooltip label="Desbloquear">
      <UnlockIcon onClick={onUnlockUser} />
    </CustomTooltip>
  )
}
