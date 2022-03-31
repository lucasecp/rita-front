import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as UnlockIcon } from '@/assets/icons/unlock.svg'

import apiUser from '@/services/apiUser'

interface UnlockUserProps {
  userId: number
}

export const UnlockUser: React.FC<UnlockUserProps> = ({ userId }) => {
  const { Loading } = useLoading()

  const onUnlockUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userId}`, {
        bloqueado: 'N',
      })

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Desbloquear')
    } finally {
      Loading.turnOff()
    }
    console.log('Desbloquear: ', userId)
  }

  return (
    <CustomTooltip label="Desbloquear">
      <UnlockIcon onClick={onUnlockUser} />
    </CustomTooltip>
  )
}
