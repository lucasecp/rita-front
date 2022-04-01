import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'
import { toast } from '@/styles/components/toastify'

import apiUser from '@/services/apiUser'

import { User } from '../../index'

interface ActivateUserProps {
  userData: User
  onGetMessage: React.Dispatch<React.SetStateAction<number>>
}

export const ActivateUser: React.FC<ActivateUserProps> = ({
  userData,
  onGetMessage,
}) => {
  const { Loading } = useLoading()

  const onActivateUser = async () => {
    try {
      Loading.turnOn()

      await apiUser.patch(`/usuario/${userData.id}/ativar`)

      toast.success(`Usuário ${userData.name} ativado com sucesso`)

      onGetMessage(Math.random())
    } catch {
      toast.error('Erro ao ativar usuário.')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <CustomTooltip label="Ativar">
      <ActivateIcon onClick={onActivateUser} />
    </CustomTooltip>
  )
}
